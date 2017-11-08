
export const addItem = item => ({
  type: 'ADD_ITEM',
  item
});

export const changeSort = (name, order) => ({
  type: 'CHANGE_SORT',
  sort: {
    [name]: order
  }
});

export const showDeleteForm = id => ({
  type: 'SHOW_DELETE_FORM',
  delete: id
});

export const deleteElement = id => ({
  type: 'DELETE_ELEMENT',
  elementId: id
});

export const showEditForm = element => ({
  type: 'SHOW_EDIT_FORM',
  form: element
});
