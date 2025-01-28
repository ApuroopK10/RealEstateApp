import React, { useState } from "react";
import "./Slider.scss";

const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const clickHandler = (idx) => {
    setActiveIndex(idx);
  };
  const handleSlider = (type) => {
    if (type === "left") {
      if (activeIndex === 0) {
        setActiveIndex(images.length - 1);
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    } else {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    }
  };
  return (
    <div className="slider">
      <div className="main">
        <img src={[images[0]]} alt="" onClick={() => clickHandler(0)} />
      </div>
      <div className="side">
        {images.slice(1).map((image, idx) => (
          <div className="image" key={image}>
            <img src={image} onClick={() => clickHandler(idx + 1)} />
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="dialog">
          <img
            className="arrow"
            src="/arrow.png"
            alt=""
            onClick={() => handleSlider("left")}
          />
          <img className="mainImg" src={images[activeIndex]} alt="" />
          <img
            className="arrow right"
            src="/arrow.png"
            alt=""
            onClick={() => handleSlider("right")}
          />
          <img
            className="close"
            src="/close.png"
            alt=""
            onClick={() => setActiveIndex(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
