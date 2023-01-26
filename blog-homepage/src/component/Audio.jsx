import React from "react";
import classes from "./Audio.module.css";
import audioIcon from "../icons/volume.svg";

function Audio() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.volume}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg"
          alt="Volume icon"
        />
        <p>Audio available</p>
      </div>
      <div className={classes.star}>★</div>
    </div>
  );
}

export default Audio;
