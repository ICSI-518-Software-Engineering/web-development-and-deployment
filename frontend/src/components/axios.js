import _axios from "axios";

const baseURL = "http://localhost:5000";

const axios = _axios.create({
  baseURL,
});

axios.defaults.baseURL = baseURL;

export default axios;
