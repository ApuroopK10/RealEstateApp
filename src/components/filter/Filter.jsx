import React from "react";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1 className="searchTitle">
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label>
          <input name="location" placeholder="Enter Location" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="location">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" name="minPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" name="maxPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="bedRoom">Bed Room</label>
          <input type="number" name="bedRoom" placeholder="any" />
        </div>
        <div className="item">
          <button>
            <img src="/search.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
