import React, { useState } from "react";
import "./Login.css";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";

import googleIcon from "../../../images/gogleIcon.png";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { isLoading, signInWithGoogle, signInWithEmailPass } = useAuth();

  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    signInWithEmailPass(
      loginData?.email,
      loginData?.password,
      location,
      history
    );
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="login_bg">
      <Container className="login_container ">
        <h2 className="text-warning my-2">Please Login </h2>
        <hr className="text-white w-25 mx-auto" />
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={6} lg={6}>
            <div className="">
              <button onClick={handleGoogleSignIn} className="loginSubmit">
                <img
                  style={{
                    width: "30px",
                    marginLeft: "-20px",
                    marginRight: "10px",
                  }}
                  src={googleIcon}
                  alt=""
                />
                Login With Google
              </button>
              <br />
              <button type="submit" className="loginSubmit">
                <i
                  style={{
                    fontSize: "25px",
                    marginLeft: "-20px",
                    marginRight: "10px",
                  }}
                  className="fab fa-github me-2"
                ></i>
                Login with Github
              </button>
            </div>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <h4 className="login_title my-3"> New Here? Please Register </h4>
            </NavLink>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {!isLoading && (
              <form onSubmit={handleLogin}>
                <input
                  onBlur={handleOnBlur}
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <br />
                <input
                  onBlur={handleOnBlur}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <br />
                <button type="submit" className="loginSubmit">
                  Log In
                </button>
              </form>
            )}
            {isLoading && <Spinner animation="border" variant="warning" />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
