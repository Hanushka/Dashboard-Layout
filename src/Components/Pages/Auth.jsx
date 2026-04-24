import React from "react";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import ForgotPassword from "../Auth/ForgotPassword";
import ResetPassword from "../Auth/ResetPassword";
import OTP from "../Auth/OTP";

export default function Auth() {
  return (
    <div>
      <SignIn />
      <SignUp />
      <ForgotPassword />
      <ResetPassword />
      <OTP />
    </div>
  );
}
