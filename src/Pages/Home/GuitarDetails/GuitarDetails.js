import React from 'react';
import "./GuitarDetails.css"
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row,  } from 'react-bootstrap';


const GuitarDetails = () => {
  
    const { keys } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <Container>
        
        <Row>
          <Col xs={12} md={6} lg={5}>
            <h2>This is Keys {keys}</h2>
          </Col>
          <Col xs={12} md={6} lg={7}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("Name")} placeholder="Name" />
              <input {...register("Email")} placeholder="Email" />
              <input {...register("Address")} placeholder="Address" />
              <input type="number" {...register("phone")} placeholder="phone" />
              <Button className="w-50" type="submit">
                Place Order
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
};

export default GuitarDetails;