import React, { Component } from 'react';
import uuid from 'uuid/v1';

import './App.css';
import FormContainer from './containers/form-container';
import ListContainer from './containers/list-container';
import DeleteDialogContainer from './containers/delete-dialog-container';

class App extends Component {

  constructor(props) {
    super(props);

    this.hideDeleteDialog = this.hideDeleteDialog.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  showEditForm(element) {
    this.setState({
      ...this.state,
      form: {...element}
    });
  }

  hideDeleteDialog() {
    this.setState({
      ...this.state,
      delete: undefined
    });
  }

  render() {
    return (
      <div className="App">
        <ListContainer
          showEditForm={this.showEditForm}
        />
        <FormContainer />
        <DeleteDialogContainer
          hideDeleteDialog={this.hideDeleteDialog}
        />
      </div>
    );
  }
}

export default App;
