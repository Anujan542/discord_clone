import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import RegisterPage from "../RegisterPage/RegisterPage";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();

  const handlePushToRegisterPage = () => {
    history.push("/register");
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Log in"
          addtionStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>

      <RedirectInfo
        text="Need an Account"
        redirectText="create an account?"
        additionStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
