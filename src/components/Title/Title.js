import React from "react";

import PropTypes from "prop-types";

const Title = ({ className = "" }) => {
  return <div className={`title ${className}`}>title content</div>;
};

// IT'S A MUST
Title.propTypes = {
  className: PropTypes.string.isRequired, // if it's mandatory prop add ".isRequired"
};

export default Title;
