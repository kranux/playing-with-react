import React, { Component } from 'react';
import uuid from 'uuid/v1';

import './App.css';
import DebtForm from './debt-form/debt-form';
import ListOfDebts from './list-of-debts/list-of-debts';
import DeleteDialog from './delete-dialog/delete-dialog'

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
      ],
      delete: undefined
    };

    this.deleteElement = this.deleteElement.bind(this);
    this.elementUpdated = this.elementUpdated.bind(this);
    this.hideDeleteDialog = this.hideDeleteDialog.bind(this);
    this.showDeleteForm = this.showDeleteForm.bind(this);
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

  showDeleteForm(element) {
    this.setState({
      ...this.state,
      delete: element.id
    });
  }

  hideDeleteDialog() {
    this.setState({
      ...this.state,
      delete: undefined
    });
  }

  deleteElement(elementId) {
    let debts = this.state.debts;
    const debtIndex = debts.findIndex(d => d.id === elementId);
    this.setState({
      ...this.state,
      debts: [...debts.slice(0, debtIndex), ...debts.slice(debtIndex + 1)],
      delete: undefined
    });
  }

  render() {
    return (
      <div className="App">
        <ListOfDebts
          showDeleteForm={this.showDeleteForm}
          showEditForm={this.showEditForm}
          value={this.state.debts}
        />
        <DebtForm
          elementUpdated={this.elementUpdated}
          value={this.state.form}
        />
        <DeleteDialog
          deleteElement={this.deleteElement}
          elements={this.state.debts}
          hideDeleteDialog={this.hideDeleteDialog}
          value={this.state.delete}
        />
      </div>
    );
  }
}

export default App;
