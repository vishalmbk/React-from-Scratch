{
  /* <div id="parent">
    <div id="child">
      <h1>H1 Tag</h1>
      <h1>H1 Tag</h1>
    </div>
    </div>; 
    <div id="parent2">
    <div id="child2">
      <h1>H1 Tag</h1>
      <h1>H1 Tag</h1>
    </div>
    </div>; how to create this react given below */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
]);
console.log(parent);
const heading = React.createElement("h1", { id: "heading" }, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
