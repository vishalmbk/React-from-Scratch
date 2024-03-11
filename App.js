import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "this is heading");
// React.createelement (obj) =>reactdom createroot (obj) => (html)
console.log(heading, "this is reactObject");
const jsxHeading = <h1>this jsx heading</h1>;
console.log(jsxHeading, "this is react object");
// JSX=> babel => React.createelement (obj) =>reactdom createroot (obj) => (html)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
//render method convert react obj in to html
