import React, { Component } from "react";
import PropTypes from "prop-types";
import { Search } from "react-feather";
import "./_SearchBar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFilter: ""
    };
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <section className="search-bar">
        <div className="search-bar__text">
          <input
            className="form-control"
            type="text"
            name="textFilter"
            value={this.state.textFilter}
            onChange={this.changeHandler}
          />
          <button className="btn btn-primary">
            <Search />
          </button>
        </div>
      </section>
    );
  }
}

export default SearchBar;
