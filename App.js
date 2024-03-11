import React from "react";
import { ReactDOM } from "react";

const heading = React.createElement("h1", { id: "heading" }, "this is heading");
const root = React.createRoot(document.getElementById("root"));
root.render(heading);
