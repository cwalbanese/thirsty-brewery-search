import React, { Component } from 'react';
import NameSearchForm from './NameSearchForm';
import CitySearchForm from './CitySearchForm';

class Nav extends Component {
  render() {
    return (
      <div>
        <NameSearchForm
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          nameValue={this.props.nameValue}
        />
        <CitySearchForm
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          cityValue={this.props.cityValue}
        />
      </div>
    );
  }
}

export default Nav;
