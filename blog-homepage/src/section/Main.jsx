import React from "react";
import MainCard from "../cards/MainCard";
import classes from "./Main.module.css";
import articles from "../your-articles.json";
import SectionHeader from "../section/SectionHeader";

function Main() {
  return (
    <>
      <SectionHeader text="For you" />
      <div className={classes.container + " " + classes.upper}>
        {articles.map((article, index) => {
          const date = new Date(article.postedDate);
          const formattedDate = date.toDateString().split(" ").slice(1, -1);
          return (
            <MainCard
              key={index}
              audio={article.hasAudioAvailable}
              author={article.author.name}
              authorImage={article.author.image}
              date={formattedDate.join(" ")}
              description={article.description}
              image={article.image}
              articleLength={article.minutesToRead}
              title={article.title}
            />
          );
        })}
        {/* <div className={classes.card2}>Div2</div>
      <div className={classes.card3}>Div3</div>
      <div className={classes.card4}>Div4</div> */}
      </div>
    </>
  );
}

export default Main;
