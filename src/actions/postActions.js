import * as types from '../constants/actionTypes';

/*-------- FETCH POSTS - START---------*/
export function getPosts() {
  return (dispatch, getState, service ) => {
    service.getPosts().then(data => {
      dispatch(getPostsSuccess(data));
    }).catch( error => {
      dispatch(getPostsFailure(error));
    })
  };
}
export function getPostsSuccess(posts){
  return { type: types.GET_POSTS_SUCCESS, posts };
}
export function getPostsFailure(error){
  return { type: types.GET_POSTS_FAILURE, error };
}
