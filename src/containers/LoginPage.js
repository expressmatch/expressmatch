import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/postActions';

class LoginPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.actions.getPosts();
  }
  componentWillMount(){
    
  }
  componentWillReceiveProps(){

  }

  render() {
    return (
      <div id="status"> 

      </div>
      <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
      
      </fb:login-button>
    );
  }
}


Loginpage.propTypes = {

};

function mapStateToProps(state, ownProps) {
  return {
    
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
)(LoginPage);
