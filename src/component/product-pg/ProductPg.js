import React, { useState } from "react";
import "./ProductPg.css";
import Datas from "../../Data.json";

const ProductPg = (props) => {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div className="container6">
      <div className="product">
        <ul className="product-list">
          <input
            className="searchbox"
            type="search"
            placeholder={props.placeholder}
            onChange={(event) => {
              setsearchTerm(event.target.value);
            }}
          />
          <li className="product-list-item active5">
            <a href="#">Sort By</a>
          </li>
          <select className="product-list-item active3">
            <option className="offer" selected="">
              OFFER
            </option>
            <option className="offer">10%</option>
            <option className="offer">15%</option>
            <option className="offer">25%</option>
            <option className="offer">15%</option>
          </select>
          <li className="product-list-item">
            <a href="#">NAME</a>
          </li>
          <li className="product-list-item">
            <a href="#">RATING</a>
          </li>
          <li className="product-list-item">
            <a href="#">PRICE</a>
          </li>
          <li className="product-list-item">
            <a href="#">CUISINE</a>
          </li>
          <li className="product-list-item">
            <a href="#">LOCATION</a>
          </li>
          <i class="fas fa-align-justify"></i>
          <i class="fas fa-th"></i>
        </ul>

        <div className="posts">
          {Datas.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.restaurantName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              val.location.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((postMessage, key) => {
            return (
              <div className="product-main-container" key={key}>
                <div className="product-container">
                  <div>
                    <img className="pr-image" src={postMessage.image} />
                  </div>
                  <div className="product-details">
                    <p className="restaurantname">
                      {postMessage.restaurantName}
                    </p>
                    <p className="location">
                      <i class="fas fa-map-marker-alt"></i>
                      {postMessage.location}
                    </p>
                    <p className="descrip">{postMessage.description}</p>
                    <p className="off">{postMessage.offer}</p>
                    <p className="cuisine">Cuisine: {postMessage.cuisine}</p>
                  </div>
                </div>
                <div className="rating-container">
                  <img
                    width={100}
                    src={require("../../Assest/images/rating.png")}
                  />
                  <p className="review">({postMessage.review} reviews) </p>
                  <p className="avg-price">Average price</p>
                  <h3 className="pricepd">
                    ${postMessage.minprice} - ${postMessage.maxprice}
                  </h3>
                  <button className="detail-btn">Details</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="more-page">
          <p className="nopgs">Showing 1 to 24 from restaurants</p>
          <ul className="pages">
            <li className="page-no active6">
              <a href="">1</a>
            </li>
            <li className="page-no">
              <a href="">2</a>
            </li>
            <li className="page-no">
              <a href="">3</a>
            </li>
            <li className="page-no">
              <a href="">4</a>
            </li>
            <li className="page-no">
              <a href="">5</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPg;
