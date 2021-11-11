import React, { useState } from "react";
import "./Register.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

import { NavLink } from "react-router-dom";
import googleIcon from "../../../images/gogleIcon.png";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { user, error, registerNewUser, isLoading, signInWithGoogle } =
    useAuth();

  const [registerData, setRegisterData] = useState({});
  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[feild] = value;
    setRegisterData(newLoginData);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  const handleRegister = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your Password didn't matched yet");
      return;
    }
    registerNewUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
    e.preventDefault();
  };

  return (
    <div className="login_bg">
      <Container className="login_container ">
        <h2 className="text-warning my-2">Please Register </h2>
        <hr className="text-white w-25 mx-auto" />
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={6} lg={6}>
            <div className="">
              <button
                onClick={handleGoogleSignIn}
                type="submit"
                className="loginSubmit"
              >
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
                  class="fab fa-github me-2"
                ></i>
                Login with Github
              </button>
            </div>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <h4 className="login_title my-3">
                Alreadey have an Account? Please Login{" "}
              </h4>
            </NavLink>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {!isLoading && (
              <form onSubmit={handleRegister}>
                <input
                  onBlur={handleOnBlur}
                  placeholder="Name"
                  label="Your Name"
                  name="name"
                />
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
                <input
                  sx={{ width: "75%", m: 1 }}
                  onBlur={handleOnBlur}
                  label="Confirm Password"
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                />
                <br />
                <Button type="submit">Register</Button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
