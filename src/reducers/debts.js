import uuid from 'uuid/v1';

const INITIAL_STATE = {
  form: {
    dateBorrowed: new Date(),
    isReturned: false,
    name: 'initial-name',
  },
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
      }
    default:
      return state;
  }
}

export default debts;
