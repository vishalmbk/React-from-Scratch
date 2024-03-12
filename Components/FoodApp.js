//- food app -
//- Navbar -
//- nav logo, nav menu
//-home,about,contact,cart
//- body -
//- restraurents, rescard ,resmenu
//- Footer -
//- copyrights, Links, Address,Contact

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
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
const FoodApp = () => {
  return (
    <>
      this is food app
      <Header />
    </>
  );
};
export default FoodApp;
