import React, { useState } from "react";
import swal from "sweetalert";
import "./Register.css";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
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
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      swal("Error!", "Your Password doesn't matched!", "error");

      return;
    }
    registerNewUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
  };

  return (
    <div className="register_bg">
      <Container className="register_container ">
        <h2 className="text-warning my-2">Please Register </h2>
        {error &&
          ["danger"].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              {error}
            </Alert>
          ))}
        <hr className="text-white w-25 mx-auto" />
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={6} lg={6}>
            <div className="">
              <button
                onClick={handleGoogleSignIn}
                type="submit"
                className="registerSubmit"
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
              <button type="submit" className="registerSubmit">
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
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <h4 className="register_title my-3">
                Alreadey have an Account? Please Login{" "}
              </h4>
            </NavLink>
          </Col>
          {/* Register form */}
          <Col xs={12} md={6} lg={6}>
            {!isLoading && (
              <form onSubmit={handleRegister}>
                <input
                  className="mb-4"
                  onBlur={handleOnBlur}
                  placeholder="Name"
                  label="Your Name"
                  name="name"
                />
                <input
                  className="mb-4"
                  onBlur={handleOnBlur}
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />

                <input
                  className="mb-4"
                  onBlur={handleOnBlur}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="mb-4"
                  onBlur={handleOnBlur}
                  label="Confirm Password"
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                />
                <br />
                <button type="submit" className="registerSubmit">
                  Register
                </button>
              </form>
            )}
            {isLoading && <Spinner animation="border" variant="warning" />}
            {user.email &&
              ["success"].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  User Created Successfully
                </Alert>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
