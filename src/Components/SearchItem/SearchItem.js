import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/301638671.jpg?k=6f62498f27bf13d0cec845c282c3516c1d0bf3a0ce496b603c6ecf1b165e0f5e&o=&hp=1"
        className="sImg"
        alt=""
      />
      <div className="siDesc">
        <h1 className="siDescTitle">Tower street apartments</h1>
        <span className="siDistance">5m from center</span>
        <span className="siTaxiOp">Free taxi to airport</span>
        <span className="siSubtitle">
          Studio apartment with air conditioning
        </span>
        <span className="siFeatures">
            Entire studion + 1 bathroom + 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
       <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
       </div>
       <div className="siDetailsText">
        <span className="siDetailsPrice">$123</span>
        <span className="siTaxOp">Includes tax and fees</span>
        <button className="siCheckButton">See availability</button>
       </div>
      </div>
    </div>
  );
};

export default SearchItem;
