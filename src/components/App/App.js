import React, { Component } from "react";
import { getData } from "../../utils/api";
import Albums from "../Albums/Albums";
import "./_App.scss";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      cachedAlbums: []
    };
  }

  componentDidMount() {
    getData(data => {
      this.setState({
        albums: data.entry,
        cachedAlbums: data.entry
      });
    });
  }

  filterAlbumsByText = textFilter => {
    if (textFilter.trim().length === 0) {
      this.setState({ albums: this.state.cachedAlbums });
    } else {
      const albums = this.state.cachedAlbums.filter(album =>
        album.title.label
          .toLowerCase()
          .trim()
          .includes(textFilter.toLowerCase().trim())
      );
      this.setState({
        albums
      });
    }
  };

  render() {
    const { albums, cachedAlbums } = this.state;
    return cachedAlbums.length > 0 ? (
      <main id="itunes-top-hundred" className="main-app faded">
        <div className="container-fluid">
          <header className="main-app__header">
            <h1>Top 100 albums</h1>
          </header>
          <SearchBar onSearch={this.filterAlbumsByText} />
          <Albums albums={albums} />
        </div>
      </main>
    ) : (
      <div className="loader">
        <span>Loading</span>
      </div>
    );
  }
}

export default App;
