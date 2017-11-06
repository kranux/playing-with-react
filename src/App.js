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
        name: 'initial-name'
      },
      debts: [
        {
          id: uuid(),
          name:'aaa'
        }
      ]
    };

    this.elementUpdated = this.elementUpdated.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  elementUpdated(element) {
    let debts = this.state.debts;
    if (element.id) {
      const index = debts.findIndex(d => d.id === element.id);
      debts = [...debts.slice(0, index), element, ...debts.slice(index + 1)];
    } else {
      debts = [...debts, {
        ...element,
        id: uuid()
      }];
    }
    this.setState({
      ...this.state,
      debts: [...debts],
      form: {
        name: '',
        id: undefined
      }
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
          elementUpdated={this.elementUpdated}
        />
      </div>
    );
  }
}

export default App;
