import React from "react";
import PropTypes from "prop-types";
import classes from "./Audio.module.css";

function Audio({ member }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.volume}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg"
          alt="Volume icon"
        />
        <p>Audio available</p>
      </div>
      {member && <div className={classes.star}>★</div>}
    </div>
  );
}

Audio.propTypes = {
  member: PropTypes.bool.isRequired,
};

export default Audio;
