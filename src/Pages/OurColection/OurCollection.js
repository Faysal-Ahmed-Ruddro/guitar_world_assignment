import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const OurCollection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://rocky-wildwood-09744.herokuapp.com/guitars")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="guitars_home_bg py-4">
      <Container>
        <Row>
          <h2 className="text-warning my-5">Our Baby's</h2>
          {products.map((product) => (
            <Col xs={12} md={6} lg={4}>
              <Card
                className="product_card "
                style={{ width: "18rem", backgroundColor: "transparent" }}
              >
                <Card.Img
                  style={{ width: "50%", margin: "0 auto" }}
                  variant="bottom"
                  src={product?.photoUrl}
                />
                <Card.Body>
                  <Card.Title className="text-warning">
                    {product?.displayName}
                  </Card.Title>
                  <Card.Title className="text-warning">${product?.price}</Card.Title>
                  <Card.Text className="text-warning">
                    {product?.description.slice(0, 100)}
                  </Card.Text>
                  <NavLink to={`/guitarDetails/${product?._id}`}>
                    {" "}
                    <Button variant="outline-warning">Purchase</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurCollection;
