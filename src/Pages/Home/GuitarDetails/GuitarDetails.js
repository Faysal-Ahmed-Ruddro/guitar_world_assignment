import React, { useEffect, useState } from "react";
import "./GuitarDetails.css";
import { useParams } from "react-router";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";

const GuitarDetails = () => {
  const [guitar, setGuitars] = useState()
  const { user } = useAuth();
  const { id } = useParams();

   const initialInfo = {
     userName: user.displayName,
     email: user.email,
     phone: "",
     address: " ",
   };
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  useEffect(()=>{
    const url = `http://localhost:5000/guitars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGuitars(data));
  },[])

 
  const  handleOnBlur= (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...orderInfo}
    newInfo[field]= value;
    setOrderInfo(newInfo)
  }

  const handleOrderSubmit = (e) =>{
    e.preventDefault();
    // collect Data 
    const orders = {
      ...orderInfo,
      productName: guitar?.displayName,
      price: guitar?.price,
    };
    
    // send to server
    fetch("http://localhost:5000/orders",{
      method:"POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(orders)
    })
    .then(res => res.json())
    .then(data =>{ 
      if (data.insertedId){
        swal("DONE!", "Order Placed Successfully", "success");
      } console.log(data);
    })

  }
  return (
    <div className="guitarDetails_bg">
      <Container className="guitarDetails_container">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={6} lg={5}>
            <Card
              className="product_card border mx-auto"
              style={{ width: "18rem", backgroundColor: "transparent" }}
            >
              <Card.Img
                style={{ width: "50%", margin: "0 auto" }}
                variant="bottom"
                src={guitar?.photoUrl}
              />
              <Card.Body style={{ backgroundColor: "tomato" }} className="">
                <Card.Title className="text-white">
                  {guitar?.displayName}
                </Card.Title>
                <Card.Title className="text-white">${guitar?.price}</Card.Title>
                <Card.Text className="text-white">
                  {guitar?.description.slice(0, 100)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={7}>
            <h2 className="guitarDetails_title">Place Your Order</h2>
            <form>
              <input
                onBlur={handleOnBlur}
                className="my-1"
                defaultValue={user?.displayName}
                placeholder="Name"
                name="userName"
              />
              <input
                onBlur={handleOnBlur}
                className="my-1"
                defaultValue={user?.email}
                label="Your Email"
                name="email"
                type="email"
                placeholder="Email"
              />

              <input
                onBlur={handleOnBlur}
                className="my-1"
                label="Address"
                name="address"
                type="address"
                placeholder="Address"
              />
              <input
                onBlur={handleOnBlur}
                className="my-1"
                label="Phone"
                name="phone"
                type="phone"
                placeholder="Phone Number"
              />
              <br />
              <button
                onClick={handleOrderSubmit}
                type="submit"
                className="registerSubmit"
              >
                Place Your Order
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GuitarDetails;
