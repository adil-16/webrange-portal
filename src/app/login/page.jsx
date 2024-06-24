"use client";
import React from "react";
import MicrosoftLogin from "react-microsoft-login";

const page = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-y-3">
      <h1 className="font-semibold text-2xl">Welcome to Webrange Portal</h1>
      <p className="text-base">Sign in with Microsoft Company Account</p>
      <MicrosoftLogin
        clientId={"9f4870a8-728f-4662-aeab-4b229627b2ad"}
        authCallback={authHandler}
      />
    </div>
  );
};

export default page;
