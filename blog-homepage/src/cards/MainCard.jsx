import React from "react";
import Audio from '../component/Audio'
import PropTypes from 'prop-types'
import classes from "./MainCard.module.css";
import bookmarkIcon from "../icons/bookmark.svg";

function MainCard({
  audio,
  author,
  authorImage,
  date,
  description,
  image,
  articleLength,
  title,
}) {
  return (
    <div className={classes["card-container"]}>
      <img src={image} alt="main article jpeg" />
      <div className={classes.content}>
        <div className={classes["content-main"]}>
          {audio && <Audio />}
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

MainCard.propTypes = {
    audio: PropTypes.bool.isRequired,
    author: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    articleLength:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default MainCard;
