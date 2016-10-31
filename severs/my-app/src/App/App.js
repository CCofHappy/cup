import React, { Component } from 'react';
import PartOne from './PartOne/PartOne';
import PartTwo from './PartTwo/PartTwo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          hello!world!
          <PartOne/>
          <PartTwo/>
      </div>
    );
  }
}

export default App;
