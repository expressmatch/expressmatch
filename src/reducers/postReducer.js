import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import posts from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function postReducer(state = posts, action) {

  switch (action.type) {
    case types.GET_POSTS:
      return objectAssign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case types.GET_POSTS_SUCCESS:
      return objectAssign({}, state, {
        isFetching: false,
        didInvalidate: false,
        posts: [
          ...state.posts, action.posts
        ]
      });

    case types.GET_POSTS_FAILURE:
      return objectAssign({}, state, {
        didInvalidate: true
      });

    default:
      return state;
  }
}
