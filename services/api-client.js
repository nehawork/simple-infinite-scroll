const BASE_URL = "https://jsonplaceholder.typicode.com/";

const API_CLIENT = axios.create({
  baseURL: BASE_URL,
});

const getRequest = (url) => {
  return API_CLIENT.get(url);
};

export { getRequest };
