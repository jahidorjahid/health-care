import React from "react";
import { Redirect } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoginForm from "./LoginForm";

const Login = () => {
  const { user } = useAuth();
  const loggedIn = user.email ? true : false;

  return loggedIn ? <Redirect to="/" /> : <LoginForm />;
};

export default Login;
