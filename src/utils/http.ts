import qs from "qs";
import { useAuth } from "../pages/context/authContext";
import * as auth from "./auth-provider";

const apiUrl = process.env.REACT_APP_API_URL;

interface IConfig extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: IConfig
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登陆" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};


export const useHttp = () => {
  const { user } = useAuth()
  // return ([endpoint, config]: [string,  IConfig]) => http(endpoint, {...config, token: user?.token})
  // JS中的typeof是在runtime时运行的，TS中的typeof是在静态环境中运行的

  // const fn: typeof http = () => {}
  // const fn2: Parameters<typeof http> = () => {}
  // 这里的typeof就是读取http的类型, Parameters读取函数中参数的类型
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, {...config, token: user?.token})
}
