import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageProduct = () => {
    const [guitars ,setGuitars] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/guitars")
        .then(res => res.json())
        .then(data => setGuitars(data))
    },[])

    const handleDelete = (id) => {
        const url = `http://localhost:5000/guitars/${id}`;
        fetch(url,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if (data.deletedCount) {
              swal("DONE!", "Product Deleted Successfully", "success");
              const remaining = guitars.filter((guitar) => guitar._id !== id);
              setGuitars(remaining);
            }
        })
    }
    return (
      <Container>
        <Row>
          {guitars.map((guitar) => (
            <Col xs={12} md={6} lg={4}>
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
                  <Card.Title className="text-white">
                    ${guitar?.price}
                  </Card.Title>
                  <Card.Text className="text-white">
                    {guitar?.description.slice(0, 100)}
                  </Card.Text>
                  <button onClick={()=>handleDelete(guitar?._id)} className="loginSubmit"> Delete </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default ManageProduct;