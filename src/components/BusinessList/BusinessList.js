/*En aquest document és on es mostren els diferents negocis */
/*És el component sibling presentational de Business  */

import React from "react";
import Business from "../Business/Business";
import "./BusinessList.css";

export default function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map((business) => {
        return <Business business={business} key={business.id} />;
      })}
    </div>
  );
}
