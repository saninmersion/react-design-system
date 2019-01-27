import Api from "./api";

class FormService {
  async submit(url, params) {
    try {
      const res = await Api.post(url, params);
      return res;
    } catch (error) {
      throw error;
    }
  }
}

export default new FormService();
