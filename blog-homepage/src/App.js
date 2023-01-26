import React from "react";
import Lower from "./section/Lower";
import Main from "./section/Main";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes["app-container"]}>
      <Main classes={classes} />
      <Lower classes={classes} />
    </div>
  );
}

export default App;
