import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  return (
    <div className="searchBar">
      <div className="type">
        <button
          onClick={() => setQuery({ ...query, type: "buy" })}
          className={query.type === "buy" ? "active" : ""}
        >
          Buy
        </button>
        <button
          onClick={() => setQuery({ ...query, type: "rent" })}
          className={query.type === "rent" ? "active" : ""}
        >
          Rent
        </button>
      </div>
      <form>
        <input type="text" name="location" placeholder="City" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={9999999}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={9999999}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
