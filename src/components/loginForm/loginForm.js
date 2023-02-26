import React, { useState, useEffect } from "react";
import styles from "./loginForm.module.css";
import Input from "../input/input";
import Button from "../button/btn";
import { Routes, Route, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onClickHandler = async () => {
    const userInfo = {
      email: email,
      password: password,
    };

    await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.localStorage.setItem("token", data.jwt_token);
      });
  };
  useEffect(() => {
    onClickHandler();
  }, []);
  return (
    <div className={styles.main}>
      <Input
        type="text"
        onChange={setEmail}
        value={email}
        placeholder="Enter your e-mail"
      />
      <Input
        type="text"
        onChange={setPassword}
        value={password}
        placeholder="Enter your password"
      />
      <Button text="Login" onClick={() => onClickHandler()} />
      <h5>
        Don't have an account?
        <a href="/register">Sign up</a>
      </h5>
    </div>
  );
};

export default LoginForm;
