import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import About from './About';
import NameSearch from './NameSearch';
import CitySearch from './CitySearch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      cityValue: ''
    };
  }
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
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
            <h2 className="searchBy">search by:</h2>
            <div>
              <h2 className="searchbar">name/keyword</h2>
              <form className="nav-form">
                <input
                  placeholder="search"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.nameValue}
                  name="nameValue"
                />

                <Link to="/namesearch">
                  <button type="submit">
                    <img src="./images/beer.svg" alt="" />
                  </button>
                </Link>
              </form>
            </div>
            <div>
              <h2 className="searchbar">city/town</h2>
              <form className="nav-form">
                <input
                  onChange={this.handleChange}
                  placeholder="search"
                  type="text"
                  name="cityValue"
                />
                <Link to="/citysearch">
                  <button type="submit">
                    <img src="./images/beer.svg" alt="" />
                  </button>
                </Link>
              </form>
            </div>
            <Link to="/">
              <h2 className="searchbar">about</h2>
            </Link>
            <img className="keg" src="./images/keg.svg" alt="keg"></img>
          </nav>
          <main>
            <Switch>
              <Route path={'/'} exact component={About} />

              <Route
                path={'/namesearch'}
                render={() => <NameSearch nameValue={this.state.nameValue} />}
              />

              <Route
                path={'/citysearch'}
                render={() => <CitySearch cityValue={this.state.cityValue} />}
              />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

export default App;
