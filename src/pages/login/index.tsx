import React from "react";
import { useAuth } from "../context/authContext";

const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const { login, user } = useAuth();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({
      username,
      password,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登陆成功，用户名：{user?.name}</div> : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};

export default Login;
