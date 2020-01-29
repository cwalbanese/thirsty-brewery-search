import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class NameSearchForm extends Component {
  render() {
    return (
      <div>
        <h2 className="searchBy">search by:</h2>
        <div>
          <div>
            <h2 className="searchbar">name/keyword</h2>
            <form
              className="nav-form"
              onSubmit={() => {
                this.props.handleSubmit();
              }}
            >
              <input
                onChange={this.props.handleChange}
                placeholder="search"
                type="text"
                name="nameValue"
                value={this.props.nameValue}
              />
              <button
                name="name"
                type="submit"
                onClick={this.props.handleSubmit}
              >
                <Link to="/search">
                  <img name="name" src="./images/beer.svg" alt="" />
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NameSearchForm;
