import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Guitar from "../Guitar/Guitar";
import "./Guitars.css";

const Guitars = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="guitars_home_bg py-4">
      <Container>
        <Row>
          <h2 className="text-white my-5">Our Baby's</h2>
          {products.map((product) => (
            <Guitar key={products.keys} product={product}></Guitar>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Guitars;
