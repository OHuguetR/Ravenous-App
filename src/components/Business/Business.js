/*En aquest document és on monta la informació d'UN sol negoci i despres es passa a BusinessList perquè el mostri */
/*És el component sibling container de BusinessList  */
import React from "react";
import "./Business.css";

export default function Business({ business }) {
  return (
    <div className="Business">
      <div className="image-container">
        <img src={business.imageSrc} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p Business-address></p>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">{business.rating}</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}
