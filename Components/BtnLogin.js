import { signIn } from "next-auth/react";
import React from "react";

const BtnLogin = ({ name, provider }) => {
  return (
    <div>
      <button
        onClick={() => signIn(provider.id)}
        className="border-2 border-black p-2 pl-6 pr-6"
      >
        Login with {name}
      </button>
    </div>
  );
};

export default BtnLogin;
