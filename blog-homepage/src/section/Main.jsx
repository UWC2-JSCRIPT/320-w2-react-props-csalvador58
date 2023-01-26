import React from "react";
import PropTypes from "prop-types";
import Card from "../cards/Card"
// import MainCard from "../cards/MainCard";
import articles from "../your-articles.json";
import SectionHeader from "../section/SectionHeader";

function Main({ classes }) {
  return (
    <>
      <SectionHeader text="For you" />
      <div className={classes.container + " " + classes.upper}>
        {articles.map((article, index) => {
          const date = new Date(article.postedDate);
          const formattedDate = date.toDateString().split(" ").slice(1, -1);
          return (
            // <MainCard
            //   key={index}
            //   articleLength={article.minutesToRead}
            //   audio={article.hasAudioAvailable}
            //   author={article.author.name}
            //   authorImage={article.author.image}
            //   date={formattedDate.join(" ")}
            //   description={article.description}
            //   image={article.image}
            //   memberPreview={article.memberPreview}
            //   title={article.title}
            // />
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
