import React, { Component } from "react";
import { getData } from "../../utils/api";
import Albums from "../Albums/Albums";
import "./_App.scss";
import SearchBar from "../SearchBar/SearchBar";
import ScrollToTop from "react-scroll-up";
import { ArrowUp } from "react-feather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      cachedAlbums: [],
      updateDate: null
    };
  }

  componentDidMount() {
    getData(data => {
      this.setState({
        albums: data.entry,
        cachedAlbums: data.entry,
        updateDate: new Date(data.updated.label)
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
            <h1>
              <span>Top 100 albums</span>
              <span className="suffix">
                last update: {this.state.updateDate.toLocaleDateString()}
              </span>
            </h1>
          </header>
          <SearchBar onSearch={this.filterAlbumsByText} />
          <Albums albums={albums} />
        </div>
        <ScrollToTop
          showUnder={320}
          style={{
            right: "15px",
            bottom: "15px"
          }}
        >
          <span>
            <ArrowUp size={30} />
          </span>
        </ScrollToTop>
      </main>
    ) : (
      <div className="loader">
        <span>Loading</span>
      </div>
    );
  }
}

export default App;
