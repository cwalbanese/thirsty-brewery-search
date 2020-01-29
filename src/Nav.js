import React, { Component } from 'react';
import './App.css';
import NameSearchForm from './NameSearchForm';
import CitySearchForm from './CitySearchForm';

class Nav extends Component {
  render() {
    return (
      <div>
        <NameSearchForm
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
        <CitySearchForm
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}

export default Nav;
