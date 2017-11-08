import uuid from 'uuid/v1';

const INITIAL_STATE = {
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
  sort: {name: -1}
};

const debts = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: [...state.list, action.item]
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
