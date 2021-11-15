import React from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";
import axios from "axios";

const MakeReview = () => {
  const { isLoading } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://rocky-wildwood-09744.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal("DONE!", "Review added Successfully", "success");
          reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addProduct_bg">
      <Container className="addProduct_container ">
        <h2 className="text-warning my-2">Please Review Our Site </h2>
        <hr className="text-white w-25 mx-auto" />
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={12} lg={12}>
            {!isLoading && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="my-1"
                  placeholder="Name"
                  {...register("displayName", {
                    required: true,
                    maxLength: 20,
                  })}
                  required
                />
                <input
                  className="my-1"
                  placeholder="Rate with number"
                  type="text"
                  {...register("stars")}
                  required
                />
                <input
                  className="my-1"
                  placeholder="Image Url"
                  {...register("photoUrl")}
                />
                <textarea
                  className="my-1"
                  placeholder="Description"
                  {...register("description")}
                  required
                />
                <input className="addProductSubmit" placeholder type="submit" />
              </form>
            )}
            {isLoading && <Spinner animation="border" variant="warning" />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakeReview;
