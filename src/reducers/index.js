import { combineReducers } from 'redux';

import debts from './debts';

const app = combineReducers({
  debts
});

export default app;
