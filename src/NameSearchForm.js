import React, { Component } from 'react';

class NameSearchForm extends Component {
  render() {
    return (
      <div>
        <h2 className="searchBy">search by:</h2>
        <div>
          <div>
            <h2 className="searchbar">name/keyword</h2>
            <form className="nav-form">
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
                <img name="name" src="./images/beer.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NameSearchForm;
