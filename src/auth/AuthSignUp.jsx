import React from "react";

import { SignUp } from "@clerk/clerk-react";

const AuthSignUp = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default AuthSignUp;
