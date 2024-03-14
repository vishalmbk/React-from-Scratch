import React from "react";
import ReactDOM from "react-dom/client";
import FoodApp from "./Components/FoodApp";

const App = () => {
  return (
    <>
      <FoodApp />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
