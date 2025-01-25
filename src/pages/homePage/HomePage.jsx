import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchbar/SearchBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Dream Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit minima voluptatum eligendi temporibus quam
            perspiciatis, iusto reiciendis culpa, dolore voluptatem debitis
            itaque vitae deserunt quas in laborum id ut excepturi!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>15+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>20+</h1>
              <h2>Awards Won</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Properties Sold</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
