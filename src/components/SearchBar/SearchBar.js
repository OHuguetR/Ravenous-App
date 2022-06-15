/*És el component on es fa tota la lògica del buscador. */

import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ searchYelp }) {
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState(sortByOptions["Best Match"]);

  function getSortByClass(sortByOptionValue) {
    if (sortBy === sortByOptionValue) {
      return "active";
    } else {
      return "";
    }
  }

  function handleSortByChange(sortByOptionValue) {
    setSortBy(sortByOptionValue);
  }

  function handleTermChange(e) {
    const term = e.target.value;
    setTerm(term);
  }

  function handleLocationChange(e) {
    const location = e.target.value;
    setLocation(location);
  }

  function handleSearch(e) {
    e.preventDefault();
    searchYelp(term, location, sortBy);
  }

  function SortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      /* console.log(sortByOptionValue);
      debugger; */
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{SortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit" onClick={handleSearch}>
        {<a>Let's Go</a>}
      </div>
    </div>
  );
}
