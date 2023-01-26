import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import LowerCard from "../cards/LowerCard";
import articles from '../missed-articles.json'
// import classes from "./Main.module.css"

function Lower({ classes }) {
  return (
    <>
      <SectionHeader text="In case you missed it" />
      <div className={classes.container + " " + classes.lower}>
        {articles.map((article, index) => {
            const date = new Date(article.postedDate)
            const formattedDate = date.toDateString().split(" ").slice(1, -1)
            return (
             <LowerCard key={index} articleLength={article.minutesToRead}
                audio={article.hasAudioAvailable}
                author={article.author.name}
                authorImage={article.author.image}
                date={formattedDate.join(" ")}
                description={article.description}
                image={article.image}
                memberPreview={article.memberPreview}
                title={article.title}
            />
            );
        })}
      </div>
    </>
  );
}

Lower.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Lower;
