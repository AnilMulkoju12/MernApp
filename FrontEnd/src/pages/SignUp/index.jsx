import React from "react";
import "./styles.scss";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="signup-container">
        <form>
          <div>
            <h3>SignUp Form</h3>
          </div>
          <label>UserName</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <label>ConfirmPasword</label>
          <input type="password" />
          <button>SignUp</button>
          <Link to="/">Go to login ?</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
