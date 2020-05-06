import React, { Component } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import About from './About';
import Results from './Results';
import Nav from './Nav';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      cityValue: '',
      data: [],
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const nameurl = `https://api.openbrewerydb.org/breweries?per_page=50&by_name=${this.state.nameValue}`;
    const cityurl = `https://api.openbrewerydb.org/breweries?per_page=50&by_city=${this.state.cityValue}`;
    const page = document.querySelector('.page');

    page.classList.add('page-order');

    if (evt.target.name === 'name') {
      fetch(nameurl)
        .then((response) => response.json())
        .then((response) => {
          this.setState({ data: response });
          this.clearSearch();
        })
        .then(() => this.props.history.push('/search'))
        .then(() => {
          document.getElementById('results').scrollIntoView();
        });
    } else {
      fetch(cityurl)
        .then((response) => response.json())
        .then((response) => {
          this.setState({ data: response });
          this.clearSearch();
        })
        .then(() => this.props.history.push('/search'))
        .then(() => {
          document.getElementById('results').scrollIntoView();
        });
    }
  };

  clearSearch = () => {
    this.setState({ nameValue: '', cityValue: '' });
  };

  render() {
    const pageOrder = () => {
      const page = document.querySelector('.page');
      page.classList.remove('page-order');
    };
    return (
      <>
        <header>
          <Link to="/">
            <h1 onClick={pageOrder}>thirsty</h1>
          </Link>
          <h3>local breweries, cideries, brewpubs, and bottleshops</h3>
        </header>
        <div className="page">
          <nav>
            <Nav
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              nameValue={this.state.nameValue}
              cityValue={this.state.cityValue}
            />
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

export default withRouter(App);
