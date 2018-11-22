import axios from "../axios";

export default {
  async getAllCategories() {
    const data = await axios.get("categories.json");
    return data;
  },
  async getAllProducts() {
    const data = await axios.get("products.json");
    return data;
  }
};
