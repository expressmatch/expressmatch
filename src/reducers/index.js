import { combineReducers } from 'redux';
import proposalReducer from './proposalReducer';
import {routerReducer} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reduxFormReducer, //redux-forms
  proposalReducer,
  routing: routerReducer
});

export default rootReducer;
