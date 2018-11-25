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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.textFilter.length > 0 && this.state.textFilter.length === 0) {
      this.searchAlbum();
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  searchAlbum = () => {
    this.props.onSearch(this.state.textFilter);
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
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.searchAlbum();
              }
            }}
          />
          <button className="btn btn-primary" onClick={this.searchAlbum}>
            <Search />
          </button>
        </div>
      </section>
    );
  }
}

export default SearchBar;
