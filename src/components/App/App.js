import React, { Component } from "react";
import { getData } from "../../utils/api";
import Albums from "../Albums/Albums";
import "./_App.scss";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    getData(data => {
      this.setState({
        albums: data.entry
      });
    });
  }

  render() {
    const { albums } = this.state;
    return albums.length > 0 ? (
      <main id="itunes-top-hundred" className="main-app faded">
        <div className="container-fluid">
          <header className="main-app__header">
            <h1>Top 100 albums</h1>
          </header>
          <SearchBar />
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
