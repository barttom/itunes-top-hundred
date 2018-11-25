import React, { Component } from "react";
import { getData } from "../../utils/api";
import Albums from "../Albums/Albums";

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
      <main id ="itunes-top-hundred">
        <div className="container-fluid">
          <Albums albums={albums} />
        </div>
      </main>
    ) : (
      <span>Loading...</span>
    );
  }
}

export default App;
