import React from "react";
import Card from "../cards/Card"
import SectionHeader from "../section/SectionHeader";
import PropTypes from "prop-types";
import articles from "../your-articles.json";

function Main({ classes }) {
  return (
    <>
      <SectionHeader text="For you" />
      <div className={classes.container + " " + classes.upper}>
        {articles.map((article, index) => {
          const date = new Date(article.postedDate);
          const formattedDate = date.toDateString().split(" ").slice(1, -1);
          return (
            <Card
              key={index}
              articleLength={article.minutesToRead}
              audio={article.hasAudioAvailable}
              author={article.author.name}
              authorImage={article.author.image}
              isCardMain={true}
              date={formattedDate.join(" ")}
              description={article.description}
              image={article.image}
              website={article.link}
              memberPreview={article.memberPreview}
              title={article.title}
            />
          );
        })}
      </div>
    </>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Main;
