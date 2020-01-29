import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import About from './About';
import Results from './Results';
import './App.css';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      cityValue: '',
      data: []
    };
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const nameurl = `https://api.openbrewerydb.org/breweries?by_name=${this.state.nameValue}`;

    const cityurl = `https://api.openbrewerydb.org/breweries?by_city=${this.state.cityValue}`;

    if (evt.target.name === 'name') {
      fetch(nameurl)
        .then(response => response.json())
        .then(response => {
          if (this.props.nameValue === '') {
            return;
          } else {
            this.setState({ data: response });
          }
        });
    } else {
      fetch(cityurl)
        .then(response => response.json())
        .then(response => {
          if (this.props.cityValue === '') {
            return;
          } else {
            this.setState({ data: response });
          }
        });
    }
  };

  render() {
    return (
      <>
        <header>
          <Link to="/">
            <h1>thirsty</h1>
          </Link>
          <h3>local breweries, cideries, brewpubs, and bottleshops</h3>
        </header>
        <div className="page">
          <nav>
            <Nav
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <Link to="/">
              <h2 className="searchbar">about</h2>
            </Link>
            <img className="keg" src="./images/keg.svg" alt="keg"></img>
          </nav>
          <main>
            <Switch>
              <Route path={'/'} exact component={About} />

              <Route
                path={'/search'}
                render={() => <Results data={this.state.data} />}
              />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default App;
