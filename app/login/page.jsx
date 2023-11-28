import React from "react";
import styles from "../ui/login/login.module.css";
import { authentication } from "../lib/actions";

const Login = () => {
  return (
    <div className={styles.container}>
      <form action={authentication} className={styles.form}>
        <h1>Login</h1>
        <input type="username" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
        {}
      </form>
    </div>
  );
};

export default Login;
