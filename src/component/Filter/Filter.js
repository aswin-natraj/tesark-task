import React from "react";
import ProductPg from "../product-pg/ProductPg";
import Pricerange from "../slider/Pricerange";
import Ratingrange from "../slider/Ratingrange";
import Checkbox from "./checkbox/checkbox";
import "./filter.css";

const location1 = "Any";
const location2 = "Shared outdoor pool";
const location3 = "Hottub/Jacuzzi";
const location4 = "Saterllite or Cable TV";
const location5 = "Parling";

const cusinetype1 = "Any";
const cusinetype2 = "American";
const cusinetype3 = "Italian";
const cusinetype4 = "French";
const cusinetype5 = "indochinese";

const Filter = (props) => {
  return (
    <div className="container5">
      <div className="filter">
        <div className="filter-hed">
          <h4 className="filter-text">FILTER YOUR RESULT</h4>
          <p className="line"></p>
        </div>
        <p className="price-text">PRICE RANGE</p>
        <Pricerange />
        <p className="price-text">RATING RANGE</p>
        <Ratingrange />
        <p className="price-text">CUISINE TYPE</p>
        <Checkbox
          check1={cusinetype1}
          check2={cusinetype2}
          check3={cusinetype3}
          check4={cusinetype4}
          check5={cusinetype5}
        />
        <p className="showmore">
          <a href="">show more</a>
        </p>
        <p className="price-text">LOCATION</p>
        <Checkbox
          check1={location1}
          check2={location2}
          check3={location3}
          check4={location4}
          check5={location5}
        />
        <p className="showmore">
          <a href="">show more</a>
        </p>
        <p className="price-text">SIDEBAR SELECTION</p>
        <select className="sidebar">
          <option>Please Select</option>
        </select>
        <p className="price-text">SIDEBAR TEXT</p>
        <p className="sidetext">
          A restaurant is a business that prepares and serves food and drinks to
          customers. Meals are generally served and eaten on the premises, but
          many restaurants also offer take-out and food delivery service{" "}
        </p>
      </div>
      <ProductPg placeholder="Where would you like to eat?" />
    </div>
  );
};

export default Filter;
