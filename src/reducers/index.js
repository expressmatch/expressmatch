import { combineReducers } from 'redux';
import postReducer from './postReducer';
import {routerReducer} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reduxFormReducer, //redux-forms
  postReducer,
  routing: routerReducer
});

export default rootReducer;
