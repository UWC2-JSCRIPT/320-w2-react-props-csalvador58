import React from "react";
import Card from "../cards/Card";
import SectionHeader from "./SectionHeader";
import PropTypes from "prop-types";
import articles from "../missed-articles.json";

function Lower({ classes }) {
  const altTags = {
    "https://cdn-images-1.medium.com/max/800/1*NosScbnZp8m_clHHaPQ3mg.jpeg":
      "White background with rows of black paint brush marks",
    "https://cdn-images-1.medium.com/max/800/0*jxP3G649xndI9S_m.":
      "Red typewriter on a leather sofa.",
    "https://cdn-images-1.medium.com/max/800/1*Msq_1dsr2maPq3ujjTVu3w.jpeg":
      "Pile of unorganized notes as the size of post-its.",
  };
  return (
    <>
      <SectionHeader text="In case you missed it" />
      <div className={classes.container + " " + classes.lower}>
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
              isCardMain={false}
              date={formattedDate.join(" ")}
              description={article.description}
              image={article.image}
              imageAlt={altTags[article.image]}
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

Lower.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Lower;
