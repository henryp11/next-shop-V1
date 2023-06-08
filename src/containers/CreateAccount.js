import React from "react";

const CreatrAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title title_left">Create new Account</h1>
        <form action="" className="form">
          <div>
            <label for="" className="labelForm">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="name"
              className="input input-name"
            />
            <label for="" className="labelForm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Put your email"
              className="input input-email"
            />
            <label for="" className="labelForm">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreatrAccount;
