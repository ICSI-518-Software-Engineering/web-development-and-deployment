import _axios from "axios";

const baseURL = "";

const axios = _axios.create({
  baseURL,
});

axios.defaults.baseURL = baseURL;

export default axios;

