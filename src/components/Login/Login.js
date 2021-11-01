import React from "react";
import { Redirect, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import LoginForm from "./LoginForm";

const Login = () => {
  const { user } = useAuth();
  const location = useLocation();
  const loggedIn = user.email ? true : false;
  const redirectURL = location.state?.from || "/";

  return loggedIn ? <Redirect to={redirectURL} /> : <LoginForm />;
};

export default Login;
