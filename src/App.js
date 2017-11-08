import React from 'react';

import './App.css';
import FormContainer from './containers/form-container';
import ListContainer from './containers/list-container';
import DeleteDialogContainer from './containers/delete-dialog-container';

const App = () =>
  <div className="App">
    <ListContainer />
    <FormContainer />
    <DeleteDialogContainer />
  </div>

export default App;
