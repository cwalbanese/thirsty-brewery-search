import React, { Component } from 'react';

class Results extends Component {
  render() {
    return (
      <div className="container" id="results">
        {this.props.data.map((result) => (
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
            {result.phone ? (
              <h3 className="phone">
                phone: <a href={'tel:' + result.phone}>{result.phone}</a>
              </h3>
            ) : (
              ''
            )}
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

export default Results;
