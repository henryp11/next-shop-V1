import React from "react";
import logoEmail from "../Icons/email.svg";
import LogoMain from "../Logos/logo_yard_sale.svg";

const RecoveryPass = () => {
  return (
    <div className="login">
      <div className="form-container recovery-container">
        <img src={LogoMain} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how tor eset the password
        </p>

        <div className="email-image">
          <img src={logoEmail} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPass;
