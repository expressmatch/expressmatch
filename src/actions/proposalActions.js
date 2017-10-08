import * as types from '../constants/actionTypes';

/*-------- FETCH PROPOSALS - START---------*/
export function getProposals() {
  return (dispatch, getState, service ) => {
    service.getProposals().then(data => {
      dispatch(getProposalsSucess(data));
    }).catch( error => {
      dispatch(getProposalsFailure(error));
    })
  };
}
export function getProposalsSucess(proposals){
  return { type: types.GET_PROPOSALS_SUCCESS, proposals };
}
export function getProposalsFailure(error){
  return { type: types.GET_PROPOSALS_FAILURE, error };
}
