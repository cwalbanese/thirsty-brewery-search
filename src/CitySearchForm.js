import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class CitySearchForm extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="searchbar">city/town</h2>
          <form className="nav-form" onSubmit={this.props.handleSubmit}>
            <input
              onChange={this.props.handleChange}
              placeholder="search"
              type="text"
              name="cityValue"
            />

            <button name="city" type="submit" onClick={this.props.handleSubmit}>
              <Link to="/search">
                <img name="city" src="./images/beer.svg" alt="" />
              </Link>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CitySearchForm;
