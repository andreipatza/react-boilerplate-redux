import axios from "axios";
import config from "./config.js";

const instance = axios.create({
  baseURL: config.baseURL,
});

instance.defaults.headers.common["Content-Type"] = "application/json";
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Accept-Version"] = "v1";
instance.defaults.headers.common["Accept-Language"] = "en";
instance.all = axios.all;
instance.spread = axios.spread;
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default instance;
