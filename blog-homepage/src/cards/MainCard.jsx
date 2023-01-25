import React from "react";
import CardMainLayout from "../layout/CardMainLayout";
import articles from '../your-articles.json';
import classes from './MainCard.module.css'
import bookmarkIcon from '../bookmark.svg';

function MainCard(props) {
    console.log(articles)

  return (
    <div className={classes.container}>
      <img src={articles[0].image} alt="Person painting"/>
      <div className={classes.content}>
        <div className={classes["content-main"]}>
            <h2>{articles[0].title}</h2>
            <p>{articles[0].description}</p>
        </div>
        <div className={classes["content-avatar"]}>
            <img src={articles[0].author.image} alt="Head shot portrait of author"/>
        </div>
        <div className={classes["content-author"]}>
            <h3>{articles[0].author.name}</h3>
            <p>{articles[0].postedDate}</p>
        </div>
        <div className={classes["content-icon"]}>
            <img src={bookmarkIcon} alt="bookmark icon"/>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
