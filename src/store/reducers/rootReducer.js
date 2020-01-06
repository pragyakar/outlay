import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
  expense: expenseReducer,
  firestore: firestoreReducer
});

export default rootReducer;