import axios from "axios";

export function myInterceptor1() {
  console.log("MyInterceptor-1 called....");

  axios.interceptors.request.use((req) => {
    req.headers.authorization = "my secret token";
    return req;
  });
}
