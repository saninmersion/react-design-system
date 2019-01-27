import Http from "axios";
import querystring from "querystring";

var cache = [];

class Api {
  constructor() {
    Http.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    Http.defaults.timeout = 300000;
  }

  async get(resource, params = {}) {
    var config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    };
    try {
      let res = {};
      let key = encodeURIComponent(resource + JSON.stringify(params));

      if (cache[key]) {
        res = cache[key];
      } else {
        res = await Http.get(resource, params, config);
        cache[key] = res;
      }

      return this.successResponse(res);
    } catch (error) {
      return this.errorResponse(error);
    }
  }

  async post(resource, params) {
    var config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    };

    try {
      let response = await Http.post(
        resource,
        querystring.stringify(params),
        config
      );
      return this.successResponse(response);
    } catch (error) {
      return this.errorResponse(error);
    }
  }

  errorResponse(error) {
    throw error;
  }

  successResponse(response) {
    return this.response(response);
  }

  response({ data, status, headers }) {
    return {
      body: data,
      status,
      headers
    };
  }
}

export default new Api();
