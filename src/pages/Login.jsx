import React from "react";
import "../components.css";

const InputField = ({ label, type, placeholder, errorMsg }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
};
function Login() {
  return (
    <div className="login-container">
      <div className="circle" id="circle1" />
      <div className="circle" id="circle2" />
      <div className="circle" id="circle3" />
      <div className="login-form">
        <h1>Welcome Back</h1>
        <div className="login-section">
          <InputField
            label="email"
            type="text"
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            errorMsg="incorrect password"
          />
        </div>
        <div className="login-section">
          <button className="btn-primary">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
