import React from "react";
import { Redirect } from "react-router";
import useAuth from "../../hooks/useAuth";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const { user } = useAuth();
  const loggedIn = user.email ? true : false;

  return loggedIn ? <Redirect to="/" /> : <RegisterForm />;
};

export default Register;
