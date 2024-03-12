import React from "react";
import ReactDOM from "react-dom";
import FoodApp from "./Components/FoodApp";

const HeadingComp = () => {
  return (
    <>
      <FoodApp />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);
//render method convert react obj in to html
