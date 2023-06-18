import React from "react";
import InputWithLabels from "../../shared/components/InputWithLabels";

const LoginInputs = ({ email, setEmail, password, setPassword }) => {
  return (
    <>
      <InputWithLabels
        value={email}
        setValue={setEmail}
        label="Email"
        type="email"
        placeholder="Enter Email"
      />
      <InputWithLabels
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default LoginInputs;
