import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/postActions';
import PostPage from './PostPage';
import SubmitPost from '../components/submitpost/SubmitPost';
import NotFoundPage from '../components/NotFoundPage';
import { Switch, Route, withRouter } from 'react-router'

class ContentArea extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }
  componentWillMount(){
    
  }
  componentWillReceiveProps(){

  }

  render() {
    return (
      <Switch>
          <Route exact path="/" component={PostPage} />
          <Route path="/post" component={SubmitPost} />
          <Route component={NotFoundPage} />
      </Switch>
    );
  }
};

ContentArea.propTypes = {
  //actions: PropTypes.object.isRequired,
  //proposals: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    //proposals: state.postReducer.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentArea));
