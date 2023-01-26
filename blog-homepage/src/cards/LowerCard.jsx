import React from "react";
import classes from "./LowerCard.module.css";
import PropTypes from 'prop-types'
import bookmarkIcon from "../icons/bookmark.svg";

function LowerCard({
    articleLength,
    audio,
    author,
    authorImage,
    date,
    description,
    image,
    memberPreview,
    title,
  }) {
  return (
    <div className={classes["card-container"]}>
      <img src={image} alt="main article jpeg" />
      <div className={classes.content}>
        <div className={classes["content-main"]}>
          {memberPreview && <div className={classes.star}>★ Member Preview</div>}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={classes["content-avatar"]}>
          <img src={authorImage} alt="Avatar portrait of author" />
        </div>
        <div className={classes["content-author"]}>
          <h3>{author}</h3>
          <p>{`${date} • ${articleLength} min read`}</p>
        </div>
        <div className={classes["content-icon"]}>
          <img src={bookmarkIcon} alt="bookmark icon" />
        </div>
      </div>
    </div>
  );
}

LowerCard.propTypes = {
    articleLength:PropTypes.number.isRequired,
    audio: PropTypes.bool.isRequired,
    author: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    memberPreview: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
}

export default LowerCard;
