import React, { Component } from 'react';

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.componentWillReceiveProps();
  }

  componentWillReceiveProps() {
    const url = `https://api.openbrewerydb.org/breweries?by_city=${this.props.cityValue}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (this.props.cityValue === '') {
          return;
        } else {
          this.setState({ data: response });
        }
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.data.map(result => (
          <div className="smallContainer" key={result.id}>
            <h1>{result.name}</h1>
            <a
              className="website"
              href={result.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{result.website_url}</h3>
            </a>
            <h2 className="breweryType">type: {result.brewery_type}</h2>
            <h3 className="phone">phone: {result.phone}</h3>
            <h3>address:</h3>
            <div className="address">
              <h3>{result.street}</h3>
              <h3>{result.city}</h3>
              <h3>{result.state}</h3>
              <h3>{result.postal_code}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CitySearch;
