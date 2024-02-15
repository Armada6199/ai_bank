import axios from "axios";
const httpMethods = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};
const axiosClient = axios.create();
const configure = () => {
  axiosClient.interceptors.request.use((config) => {
    const callback = () => {
      config.headers.Authorization = `Bearer addTokenHere`;
      return Promise.resolve(config);
    };
    return "add the update token here when you get it";
  });
};
const getAxiosClient = () => axiosClient;
export const HttpService = {
  httpMethods,
  configure,
  getAxiosClient,
};
