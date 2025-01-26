import React from "react";
import "./ListPage.scss";
import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

const ListPage = () => {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {listData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={listData} />
      </div>
    </div>
  );
};

export default ListPage;
