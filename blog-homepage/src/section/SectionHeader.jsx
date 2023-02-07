import React from "react";
import PropTypes from "prop-types";

function SectionHeader({ text }) {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
