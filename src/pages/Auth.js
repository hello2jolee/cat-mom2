import React from "react";

// -- components
import AuthForm from "components/Auth/AuthForm";
import SocialConnection from "components/Auth/SocialConnection";

const Auth = () => {
  return (
    <>
      <AuthForm />
      <SocialConnection />
    </>
  );
};

export default Auth;
