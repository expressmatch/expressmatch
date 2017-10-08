import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import proposals from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function proposalReducer(state = proposals, action) {

  switch (action.type) {
    case types.GET_PROPOSALS:
      return objectAssign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case types.GET_PROPOSALS_SUCCESS:
      return objectAssign({}, state, {
        isFetching: false,
        didInvalidate: false,
        proposals: [
          ...state.proposals, action.proposals
        ]
      });

    case types.GET_PROPOSALS_FAILURE:
      return objectAssign({}, state, {
        didInvalidate: true
      });

    default:
      return state;
  }
}
