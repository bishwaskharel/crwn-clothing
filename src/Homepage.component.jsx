import React from "react";
import "./homepage.style.scss";

const Homepage = () => {
  return (
    <>
      <div className="name">
        Bishwas Kharel is <span className="action">Hero</span>
      </div>
      <span className="action">Shop Now</span>
      <div className="name">
        <h1>Online Shop</h1>
      </div>
      <h1 className="name">
        <span className="action">Online Shop</span><br/><br/>
        <em className="action">Click here</em>
      </h1>
      <p className="css">Hello I want to learn css.
      <p className="padding">Hello I want to learn Padding.</p>
      <p className="margin">Hello I want to learn Margin. </p>
      </p>
    </>
  );
};

export default Homepage;
