import React, { Component } from "react";
import "./App.css";
import { getData } from "../../utils/api";

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
    return albums.length > 0 ? <div className="App" /> : <span>Loading..</span>
  }
}

export default App;
