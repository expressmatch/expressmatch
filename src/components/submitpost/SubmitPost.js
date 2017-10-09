import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/proposalActions';
import PostForm from "./PostForm";

class SubmitPost extends React.Component {
  constructor(props){
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount(){
    //this.props.actions.getProposals();
  }
  componentWillMount(){
    
  }
  componentWillReceiveProps(){

  }

  handleOnSubmit(e){
    alert("Submit");
    
  }

  render() {
    return (
      <div className="content-area">
        <PostForm onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}


SubmitPost.propTypes = {
  //actions: PropTypes.object.isRequired
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitPost);
