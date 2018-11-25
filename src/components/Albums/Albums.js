import React from "react";
import PropTypes from "prop-types";
import SingleAlbum from "../SingleAlbum/SingleAlbum";
import "./_Albums.scss";

const Albums = ({ albums }) =>
  albums.length > 0 ? (
    <ul className="list-unstyled albums">
      {albums.map(album => (
        <SingleAlbum key={album.id.label} album={album} />
      ))}
    </ul>
  ) : (
    <div
      className="alert alert-primary text-center col-sm-8 offset-sm-2"
      role="alert"
    >
      no results :(
    </div>
  );

Albums.propTypes = {
  albums: PropTypes.array
};

export default Albums;
