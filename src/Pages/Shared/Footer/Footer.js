import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_bg py-2">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12} className="py-2">
            <h2 className="text-warning">Foollw Us</h2>
            <hr className="w-25 text-white mx-auto" />
            <div className="d-flex justify-content-center ">
              <Link to="#">
                {" "}
                <i className="fab fa-facebook m-3 text-primary fs-1"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram m-3 text-danger fs-1"></i>{" "}
              </Link>
              <Link to="#">
                <i className="fab fa-pinterest m-3 text-danger fs-1"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter m-3 text-primary fs-1"></i>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h2 className="footer_title">Dhanmondi Branch:</h2>
            <li>Plaza AR, House 2, Road 14, Shop 404-405, Dhanmondi, </li>
            <li>Dhaka, Bangladesh </li>
            <li>Cell: +8801709847986 </li>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h2 className="footer_title">Gulshan 2 Branch:</h2>
            <li>Alam Arcade, Plot 43, 5th Floor, Lift 5, , </li>
            <li>Madani Avenue, North Gulshan, Dhaka 1212, Bangladesh </li>
            <li>Cell: +8801730860680, </li>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h2 className="footer_title">Banani 11 Branch:z</h2>
            <li>
              Hakam Foundation, 2nd floor, lift 2, house 98, Road 11, block c,{" "}
            </li>
            <li>Banani, Dhaka 1215, Bangladesh </li>
            <li>Cell: +8801709847986 </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
