import React from 'react';

const DeleteDialog = ({value, elements, hideDeleteDialog, deleteElement}) => value ?
  <div>
    <p>Are you sure you want to delete {elements.find(e => e.id === value).name}?
    </p>
    <div>
      <button onClick={hideDeleteDialog}>Cancel</button>
      <button onClick={() => deleteElement(value)}>Delete</button>
    </div>
  </div>
  : null;

export default DeleteDialog;
