import React, { useState } from "react";
import "./MakeAdmin.css";
import { Alert, Col, Container, Row } from "react-bootstrap";

const MakeAdmn = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://rocky-wildwood-09744.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="makeAdmin_bg">
      <div>
        <Container className="makeAdmin_container">
          <h2 className="makeAdmin_title">Make Admin</h2>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <form onSubmit={handleSubmit}>
                <input
                  className="mb-4"
                  onBlur={handleOnBlur}
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <button type="submit" className="loginSubmit">
                  Make Admin
                </button>
                {success &&
                  ["success"].map((variant, idx) => (
                    <Alert className="my-4 w-75" key={idx} variant={variant}>
                      Made Admin Successfully
                    </Alert>
                  ))}
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MakeAdmn;
