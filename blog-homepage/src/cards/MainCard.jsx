import React from "react";
import CardMainLayout from "../layout/CardMainLayout";
import articles from '../your-articles.json';
import classes from './MainCard.module.css'

function MainCard(props) {
    console.log(articles)

  return (
    <div className={classes.container}>
      <img src={articles[0].image} alt="Person painting"/>
      <div>Right</div>
    </div>
  );
}

export default MainCard;
