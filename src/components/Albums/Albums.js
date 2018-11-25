import React from "react";
import PropTypes from "prop-types";
import SingleAlbum from "../SingleAlbum/SingleAlbum";

const Albums = ({ albums }) => (
  <ul>
    {albums.map(album => (
      <SingleAlbum key={album.id.label} album={album} />
    ))}
  </ul>
);

Albums.propTypes = {
  albums: PropTypes.array
};

export default Albums;
