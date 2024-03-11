import React from "react";
import ReactDOM from "react-dom";

//Component Copmosition=>component inside copmonent
const Title = () => {
  return <>this title component</>;
};
const HeadingComp = () => {
  return (
    <>
      this is heading component
      <Title />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);
//render method convert react obj in to html
