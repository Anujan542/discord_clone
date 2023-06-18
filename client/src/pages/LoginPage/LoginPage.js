import React, { useState } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginHeader from "./LoginHeader";
import LoginInputs from "./LoginInputs";
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    console.log("first");
  };

  return (
    <AuthBox>
      <LoginHeader />
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
