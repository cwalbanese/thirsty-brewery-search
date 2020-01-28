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
  handleChangeName = evt => {
    this.setState({ nameValue: evt.target.value });
  };

  handleChangeCity = evt => {
    this.setState({ cityValue: evt.target.value });
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
                  onChange={this.handleChangeName}
                  value={this.state.nameValue}
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
                  onChange={this.handleChangeCity}
                  placeholder="search"
                  type="text"
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
            </Switch>
            <Switch>
              <Route
                path={'/namesearch'}
                render={() => <NameSearch nameValue={this.state.nameValue} />}
              />
            </Switch>
            <Switch>
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
