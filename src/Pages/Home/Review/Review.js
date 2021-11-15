import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";


const Review = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("https://rocky-wildwood-09744.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  return (
    <div className="guitars_home_bg py-4">
      <Container>
        <div className="my-5">
          <h2 className="text-warning ">Customers Reviews</h2>
          <hr style={{ margin: "0 auto" }} className="w-50 text-white " />
        </div>
        <Row>
          {ratings.map((rating) => (
            <Col xs={12} md={6} lg={4}>
              <Card
                className="product_card "
                style={{ width: "18rem", backgroundColor: "transparent" }}
              >
                <Card.Img
                  style={{ width: "50%", borderRadius:"50%", margin: "0 auto" }}
                  variant="bottom"
                  src={rating?.photoUrl}
                />
                <Card.Body>
                  <Card.Title className="text-warning">
                    {rating?.displayName}
                  </Card.Title>
                  <Card.Title className="text-warning"></Card.Title>
                  <Card.Text className="text-warning">
                    {rating?.description.slice(0, 100)}
                  </Card.Text>
                  <Rating
                    className="text-warning"
                    initialRating={rating?.stars}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star "
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Review;
