import uuid from 'uuid/v1';

export const addItem = item => ({
  type: 'ADD_ITEM',
  item: {
    ...item,
    id: uuid()
  }
});

export const changeSort = (name, order) => ({
  type: 'CHANGE_SORT',
  sort: {
    [name]: order
  }
});
