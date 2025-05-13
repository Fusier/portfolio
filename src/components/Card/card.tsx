import React from "react";
import "./card.scss";

const Card: React.FC = () => {
  return (
    <div className="container">
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Card one</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Card one</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Card two</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Card Three</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
