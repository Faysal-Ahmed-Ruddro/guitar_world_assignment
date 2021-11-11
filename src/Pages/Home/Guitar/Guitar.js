import React from 'react';
import "./Guitar.css"
import { Card, Col, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Guitar = (props) => {
    const{displayName,price,photoUrl,description,keys} = props?.product || {};
    return (
      <Col xs={12} md={6} lg={4}>
        <Card
          className="product_card "
          style={{ width: "18rem", backgroundColor: "transparent" }}
        >
          <Card.Img
            style={{ width: "50%", margin: "0 auto" }}
            variant="bottom"
            src={photoUrl}
          />
          <Card.Body>
            <Card.Title className="text-warning">{displayName}</Card.Title>
            <Card.Title className="text-warning">${price}</Card.Title>
            <Card.Text className="text-warning">
              {description.slice(0, 100)}
            </Card.Text>
            <NavLink to={`/guitarDetails/:${keys}`}>
              {" "}
              <Button variant="outline-warning">Purchase</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Guitar;