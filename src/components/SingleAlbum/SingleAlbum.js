import React from "react";
import PropTypes from "prop-types";

const SingleAlbum = ({ album: { title } }) => <li>{title.label}</li>;

SingleAlbum.propTypes = {
  album: PropTypes.object
};

export default SingleAlbum;
