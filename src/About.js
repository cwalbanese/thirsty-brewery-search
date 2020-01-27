import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div>
        <img
          className="bartender"
          src="./images/bartender.jpg"
          alt="bartender"
        ></img>
        <p>
          <span className="thirsty">thirsty</span> is an application designed to
          assist you when, well, you're
          <span className="thirsty"> thirsty</span>. it is a way to search for
          local breweries, cideries, brewpubs, and bottleshops. instead of
          scouring google trying to figure out what's a brewery and what's a
          bar, use the <span className="thirsty"> thirsty</span> app to filter
          your search to just breweries and alike! how cool is that? happy
          drinking and be safe.
        </p>
      </div>
    );
  }
}

export default About;
