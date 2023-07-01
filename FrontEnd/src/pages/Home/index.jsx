import React from "react";
import Header from "../../components/Header";
import "./styles.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="login-form">
        <form>
          <div>
            <h3>Login Form</h3>
          </div>
          <label>UserName</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button>Login</button>
          <div>
            <p>ForgotPassword ?</p>
            <Link to="/signup">SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
