import React from "react";
import "./Banner.css"
import { Carousel, } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="silder_bg"></div>
        <Carousel.Caption>
          <h1 className="text-warning">"Music is the soul of life"</h1>
          <p className="slider_p">
            "Music is the language of the spirit. It opens the secret of life{" "}
            <br />
            bringing peace, abolishing strife"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="silder_bg2"></div>
        <Carousel.Caption>
          <h1 className="text-warning">"Where words leave off, music begins"</h1>
          <p className="slider_p">
            "Music is the only language in which you cannot say <br /> a mean or
            sarcastic thing.."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="silder_bg3"></div>
        <Carousel.Caption style={{ marginTop: "150px" }}>
          <h1 className="text-warning">
            "Music in the soul can be heard by the universe"
          </h1>
          <p className="slider_p">
            "Music is the literature of the heart; it commences where speech
            ends."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
