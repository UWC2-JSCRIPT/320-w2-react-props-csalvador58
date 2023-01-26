import React from "react";
import Audio from "../component/Audio";
import PropTypes from "prop-types";
import classes from "./Card.module.css";
import bookmarkIcon from "../icons/bookmark.svg";

function Card({
  articleLength,
  audio,
  author,
  authorImage,
  isCardMain,
  date,
  description,
  image,
  memberPreview,
  title,
}) {
    // console.log(isCardMain)
    // console.log(isCardMain ? classes.card : classes.card + " alt")
  return (
    <div className={isCardMain ? classes.card : classes["card-alt"]}>
      <img className={isCardMain ? "" : classes["img-alt"]} src={image} alt="main article jpeg" />
      <div className={isCardMain ? classes.content : classes["content-alt"]}>
        <div className={isCardMain ? classes.main : classes["main-alt"]}>
          {isCardMain && audio && <Audio member={memberPreview} />}
          {!isCardMain && memberPreview && (
            <div className={classes.star}>★ Member Preview</div>
          )}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={isCardMain ? classes.avatar : classes["avatar-alt"]}>
          <img className={isCardMain ? "" : "alt"} src={authorImage} alt="Avatar portrait of author" />
        </div>
        <div className={classes.author}>
          <h3>{author}</h3>
          <p>{`${date} • ${articleLength} min read`}</p>
        </div>
        <div className={classes.icon}>
          <img src={bookmarkIcon} alt="bookmark icon" />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  articleLength: PropTypes.number.isRequired,
  audio: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  isCardMain: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  memberPreview: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
