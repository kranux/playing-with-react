import React, { Component } from 'react';
import uuid from 'uuid/v1';

import './App.css';
import FormContainer from './containers/form-container';
import DeleteDialog from './delete-dialog/delete-dialog';
import ListContainer from './containers/list-container';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      delete: undefined
    };

    this.deleteElement = this.deleteElement.bind(this);
    this.hideDeleteDialog = this.hideDeleteDialog.bind(this);
    this.showDeleteForm = this.showDeleteForm.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
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
        <ListContainer
          showDeleteForm={this.showDeleteForm}
          showEditForm={this.showEditForm}
        />
        <FormContainer />
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
