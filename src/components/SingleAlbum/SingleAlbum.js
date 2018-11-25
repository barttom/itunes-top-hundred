import React from "react";
import PropTypes from "prop-types";
import "./_SingleAlbum.scss";
import { ExternalLink } from "react-feather";

const SingleAlbum = ({ album }) => (
  <li className="single-album">
    <div className="single-album__cover">
      <img
        className=""
        src={album["im:image"][2].label}
        alt={album.title.label}
      />
    </div>
    <div className="single-album__desc">
      <h5 className="single-album__title">{album["im:name"].label}</h5>
      <h6 className="single-album__artist">{album["im:artist"].label}</h6>
      <a
        href={album.link.attributes.href}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more <ExternalLink size={14} />
      </a>
    </div>
  </li>
);

SingleAlbum.propTypes = {
  album: PropTypes.object
};

export default SingleAlbum;
