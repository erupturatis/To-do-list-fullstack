import React from "react";
import { getSession, getProviders } from "next-auth/react";

import BtnLogin from "../Components/BtnLogin";

const Login = ({ getProviders, session }) => {
  if (session) return null;
  return (
    <div>
      <div className="flex text-2xl justify-center mt-10">
        <div>Login with google bro</div>
      </div>
      <div className="flex text-2xl justify-center mt-10">
        <BtnLogin name={"google"} provider={getProviders.google} />
        <BtnLogin name={"github"} provider={getProviders.github} />
      </div>
    </div>
  );
};

Login.getInitialProps = async (context) => {
  return {
    getProviders: await getProviders(context),
    session: await getSession(context),
  };
};

export default Login;
