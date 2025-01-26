import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ id, img, title, address, price, bedroom, bathroom }) => {
  return (
    <div className="card">
      <Link to={`/${id}`} className="imgContainer">
        <img src={img} alt={title} />
      </Link>
      <div className="cardContainer">
        <h3>
          <Link to={`/${id}`}>{title}</Link>
        </h3>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{address}</span>
        </p>
        <p className="price">$ {price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{bedroom} Bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{bathroom} Bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
