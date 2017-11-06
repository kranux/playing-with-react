import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CreateDebtForm from './create-debt-form/create-debt-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateDebtForm/>
      </div>
    );
  }
}

export default App;
