import React from "react";
import "./GuitarDetails.css";
import { useParams } from "react-router";
import { Button, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const GuitarDetails = () => {
  const { user } = useAuth();

  const { keys } = useParams();

  return (
    <div className="guitarDetails_bg">
      <Container className="guitarDetails_container">
        <Row>
          <Col xs={12} md={6} lg={5}>
            <h2>This is Keys {keys}</h2>
          </Col>
          <Col xs={12} md={6} lg={7}>
            <h2 className="guitarDetails_title">Place Your Order</h2>
            <form>
              <input
                disabled
                className="my-1"
                defaultValue={user?.displayName}
                placeholder="Name"
                name="name"
              />
              <input
                disabled
                className="my-1"
                defaultValue={user?.email}
                label="Your Email"
                name="email"
                type="email"
                placeholder="Email"
              />

              <input
                className="my-1"
                label="Address"
                name="Address"
                type="address"
                placeholder="Address"
              />
              <input
                className="my-1"
                label="Phone"
                name="phone"
                type="phone"
                placeholder="Phone Number"
              />
              <br />
              <button type="submit" className="registerSubmit">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GuitarDetails;
