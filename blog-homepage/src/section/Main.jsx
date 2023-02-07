import React from "react";
import Card from "../cards/Card";
import SectionHeader from "../section/SectionHeader";
import PropTypes from "prop-types";
import articles from "../your-articles.json";

function Main({ classes }) {
  const altTags = {
    "https://cdn-images-1.medium.com/max/800/1*PIC-U670COEqmGwt4cvXAA.jpeg":
      "Body view of person creating art with paint all over hands",
    "https://cdn-images-1.medium.com/max/800/1*KHs6OgOb7_aJhmQvOKj_dg.jpeg":
      "Chart to create an auto-publicist marketing sequence.",
    "https://cdn-images-1.medium.com/max/800/1*cioT9CBBV2s0svet9LqKZA.png":
      "Playground swings with graffiti art wall background.",
    "https://cdn-images-1.medium.com/max/800/1*_NTwW2r8Konom4d5vIPkuw.png":
      "Drawing of a lady standing on one foot.",
  };
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

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Main;
