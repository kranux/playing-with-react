import uuid from 'uuid/v1';

const INITIAL_STATE = {
  form: {
    dateBorrowed: new Date(),
    isReturned: false,
    name: 'initial-name',
  },
  delete: undefined,
  list: [
    {
      dateBorrowed: new Date(),
      id: uuid(),
      isReturned: false,
      name: 'aaa',
    },
    {
      dateBorrowed: new Date(),
      id: uuid(),
      isReturned: true,
      name: 'bbb',
    }
  ],
  sort: {name: -1},
};

const debts = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      let list = state.list;
      const element = action.item;
      if (element.id) {
        const index = list.findIndex(d => d.id === element.id);
        list = [...list.slice(0, index), element, ...list.slice(index + 1)];
      } else {
        list = [...list, {
          ...element,
          id: uuid()
        }];
      }
      return {
        ...state,
        list,
        form: {
          id: undefined,
          isReturned: false,
          name: '',
        }
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: action.sort
      };
    case 'SHOW_DELETE_FORM':
      return {
        ...state,
        delete: action.delete
      };
    case 'DELETE_ELEMENT': {
      const list = state.list;
      const debtIndex = list.findIndex(d => d.id === action.elementId);
      return {
        ...state,
        list: [...list.slice(0, debtIndex), ...list.slice(debtIndex + 1)],
        delete: undefined
      };
    }
    case 'SHOW_EDIT_FORM':
      return {
        ...state,
        form: action.form
      };
    default:
      return state;
  }
}

export default debts;
