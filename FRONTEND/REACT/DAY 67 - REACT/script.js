// ==============================
// React Day 2 
// ==============================

// Create Elements
let h1 = React.createElement(
  "h1",
  {
    style: {
      color: "red",
      textAlign: "center",
    },
  },
  "Hello From React 1"
);

let h2 = React.createElement(
  "h2",
  {
    style: {
      color: "blue",
      textAlign: "center",
    },
  },
  "Hello From React 2"
);

// Parent Element
let div = React.createElement(
  "div",
  {
    className: "container",
    style: {
      border: "2px solid red",
      padding: "20px",
      margin: "20px",
      backgroundColor: "#f5f5f5",
    },
  },
  [h1, h2]
);

// Select Root Element
let selectedRoot = document.querySelector("#root");

// Create React Root
let root = ReactDOM.createRoot(selectedRoot);

// Render Parent Element
root.render(div);