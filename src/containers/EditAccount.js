import React from "react";

const EditAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title tittle_left">My Account</h1>
        <form action="" className="form">
          <div>
            <label htmlFor="" className="labelForm">
              Name
            </label>
            <p className="value">YokoHama</p>
            <label htmlFor="" className="labelForm">
              Email address
            </label>
            <p className="value">xxxx@xxx.com</p>

            <label htmlFor="" className="labelForm">
              Password
            </label>
            <p className="value">********</p>
          </div>
          <input type="submit" value="Edit" className="secondary-button" />
        </form>
      </div>
    </div>
  );
};

export default EditAccount;
