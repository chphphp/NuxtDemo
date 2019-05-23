import axios from 'axios'
// const baseUrl ='http://192.168.131.237:9090' //dev
const baseUrl ='http://192.168.131.249:16080' //test
// const baseUrl ='http://127.0.0.1:8090' //pro

// const baseUrl ='http://192.168.141.78:9090' //test
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  if(response.status !== 200){
    // response.data = {}
  }
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export  default {
  post:function (url,params={},isProxy = false) {
    url=isProxy ? url:baseUrl + url;
    // url=isProxy ? url:`http://192.168.131.94:8082${url}`;
    return axios.post(url,params)
  },
  get:function (url,params={},isProxy = false) {
    url=isProxy ? url:baseUrl + url;
    // url=isProxy ? url:`http://192.168.131.94:8082${url}`;
    return axios.get(url)
  }
}
