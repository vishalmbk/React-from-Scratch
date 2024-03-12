//- food app -
//- *Header* -
//  - nav logo
//  - nav items
//     -home,about,contact,cart
//- *body* -
//  -Search
//  -RestraurentContainer
//     -resCard
//       -img
//       -Name of res, star ratings, cuisine ,etc
//- *Footer* -
//  - copyrights
//  -Links
//  -Address
//  -Contact

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurentCard = () => {
  return (
    <div className="res-container">
      <div className="res-card">
        <h2>Priti Food</h2>
        <img
          className="res-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPGr_sA0u2WwHd_xKm5bxDYDvso5M0f9Wyg&usqp=CAU"
        />
        <h3>Shahi Paneer, Biryani, South Indian, North Indian</h3>
        <h4>4.5 stars...</h4>
        <h4>15 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

const FoodApp = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
export default FoodApp;
