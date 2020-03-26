import React from "react";
import "./signin-signup.styles.scss";
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
const SigninSignup = () => (
  <div className="signin-signup">
    <Signin />
    <SignUp />
  </div>
);

export default SigninSignup;
