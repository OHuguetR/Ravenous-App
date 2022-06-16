/*En aquest document és on es renderitzen tots els altres components */

import React, { useState, useEffect } from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const apiKey =
  "dJTtSE4LD8zK2Ye4J6ud4n7O7W03Xj7WJOzcwodzNFT5QAOpmZAOeYEaKCilp2jkMi9UlSgAgGULHUwtXjoR64dkOeacx4QNWdr8hm3HRbekOkx-Ct8rg7QL2jGqYnYx";

export default function App() {
  const [businesses, setBusiness] = useState([]);

  useEffect(() => {
    //No em renderitza la primera vegada que s'inicialitza amb Barcelona.
    searchYelp("", "Madrid", "best_match");
  }, []);

  useEffect(() => {
    // No se com posar la propietat correcte
    document.title = `Ravenous | ${businesses[0]?.city ?? ""}`;
  }, [businesses]);

  async function search(term, location, sortBy) {
    try {
      const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
      const request = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      console.log(request);
      const jsonResponse = await request.json();
      console.log(jsonResponse);
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));
      } else {
        console.log("No hi ha dades");
      }
    } catch (error) {
      throw alert(error);
    }
  }

  async function searchYelp(term, location, sortBy) {
    const businesses = await search(term, location, sortBy);
    setBusiness(businesses);
  }

  return (
    <div class="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}
