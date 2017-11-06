import React, { Component } from 'react';

import uuid from 'uuid/v1';


import './App.css';

import CreateDebtForm from './create-debt-form/create-debt-form';
import ListOfDebts from './list-of-debts/list-of-debts';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        id: uuid(),
        name: 'initial-name'
      },
      debts: [
        {
          id: uuid(),
          name:'aaa'
        }
      ]
    };

    this.createListElement = this.createListElement.bind(this);
  }

  createListElement(element) {
    this.setState({
      ...this.state,
      debts: [...this.state.debts, element]
    });
  }

  showEditForm(element) {
    this.setState({
      ...this.state,
      form: {...element}
    });
  }

  render() {
    return (
      <div className="App">
        <ListOfDebts
          value={this.state.debts}
          showEditForm={this.showEditForm}
        />
        <CreateDebtForm
          value={this.state.form} 
          createListElement={this.createListElement}/>
      </div>
    );
  }
}

export default App;
