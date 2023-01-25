import React from "react";
import MainCard from "../cards/MainCard";
import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.container + " " + classes.upper}>
      <MainCard />
      <div className={classes.card2}>Div2</div>
      <div className={classes.card3}>Div3</div>
      <div className={classes.card4}>Div4</div>
    </div>
  );
}

export default Main;
