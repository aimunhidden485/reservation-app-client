import React from "react";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/273680842.jpg?k=4dfce12a6069a738380f999e1e9d87a0cbb821bccbc1b5b457d190fe82750229&o=&hp=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Cox's bazar</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/344092925.jpg?k=3628301670446b7a146185643b81482ad439d3964daa72a1e4549fa60ce22f94&o=&hp=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>406 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/283694609.jpg?k=01c6da077eb1e78774abca3f10f53b04bcf74084b25f31f104ec4dd246aa28c7&o=&hp=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>228 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/344213789.jpg?k=657f9692c9720de19d3ed06e0d4feb0e99824c6b696242699ce4b72cd304b71f&o=&hp=1"
          alt=""
        />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>80 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
