import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Guitars from "../Guitars/Guitars";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Guitars></Guitars>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
