import Api from "./api";

class DataService {
  async getDataList() {
    try {
      let res = await Api.get("data");
      return res.body;
    } catch (error) {
      throw error;
    }
  }
}

export default new DataService();
