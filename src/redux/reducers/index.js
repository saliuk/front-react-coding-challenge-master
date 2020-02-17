import { combineReducers } from 'redux';
import messageReducer from './message.reducer';

const reducers = combineReducers({
  messages: messageReducer,
});

export default reducers;
