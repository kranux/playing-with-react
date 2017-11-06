import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CreateDebtForm from './create-debt-form/create-debt-form';
import ListOfDebts from './list-of-debts/list-of-debts';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {debts: [
      {
        id: new Date().getMilliseconds(),
        name:'aaa'
      }
    ]};

    this.createListElement = this.createListElement.bind(this);
  }

  createListElement(element) {
    this.setState({
      ...this.state,
      debts: [...this.state.debts, element]
    });
  }

  render() {
    return (
      <div className="App">
        <ListOfDebts value={this.state.debts}/>
        <CreateDebtForm createListElement={this.createListElement}/>
      </div>
    );
  }
}

export default App;
