import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/proposalActions';
import ProposalPage from './ProposalPage';
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
          <Route exact path="/" component={ProposalPage} />
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
    //proposals: state.proposalReducer.proposals
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
