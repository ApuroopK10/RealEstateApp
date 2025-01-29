import React from "react";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";
import "./SinglePage.scss";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1 className="title">{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus recusandae obcaecati quis amet ex voluptas nihil,
                cumque deleniti ut ratione, unde quae reprehenderit delectus
                accusantium esse molestiae repellat odit suscipit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Voluptatem minus
                nulla repellat facilis aut, iusto incidunt placeat odio est
                distinctio. Fugiat, itaque fuga delectus amet neque nihil a est
                quas!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default SinglePage;
