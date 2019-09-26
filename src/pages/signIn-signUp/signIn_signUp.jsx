import React from "react";

import "./signIn-signUp.styles.scss";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/sign-up/SignUp";

function signIn_signUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default signIn_signUp;
