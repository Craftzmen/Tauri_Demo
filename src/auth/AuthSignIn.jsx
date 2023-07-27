import React from "react";

import { SignIn } from "@clerk/clerk-react";

const AuthSignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default AuthSignIn;
