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
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount(){
    //this.props.actions.getProposals();
  }
  componentWillMount(){
    
  }
  componentWillReceiveProps(){

  }

  handleOnSubmit(event){
    //event.preventDefault();

    if (this.validateForm(event)){
       alert("Submit");
    } 
  }

  validateForm(event){
    return true;
  }

  render() {

    return (

      <div className="content-area">
        <PostForm onSubmit={this.handleOnSubmit} />

        {/*<form name="proposal" className="proposal-form" onSubmit={this.handleOnSubmit}>
          <div className="form-container">
            <div className="row">
              <div className="form-header">Express and Find your Match</div>
            </div>
            <div className="row">
              <div className="field-name">Age</div>
              <div className="field-value">
                <select>
                  {age}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="field-name">Gender</div>
              <div className="field-value">
                <label>
                  <input type="radio" name="gender" value="male" />
                    <span>Male</span>
                </label>
                <label>
                  <input type="radio" name="gender" value="female" />
                    Female
                </label>
              </div>
            </div>
            <div className="row">
              <div className="field-name">City</div>
              <div className="field-value"><input type="text" placeholder="Enter your city"/></div>
            </div>
            <div className="row">
              <div className="field-name">Let your creative minds take off, Express!</div>
              <div className="field-value">
                <textarea maxLength="500" placeholder="Tell us about yourself and your expectations..."/>
              </div>
            </div>
            <div className="row">
              <div className="field-name">Name</div>
              <div className="field-value"><input type="text"/></div>
            </div>
            <div className="row">
              <div className="field-name">Email</div>
              <div className="field-value"><input type="text"/></div>
            </div>
            <div className="row">
              <div className="field-name">Phone</div>
              <div className="field-value"><input type="text"/></div>
            </div>
            <div className="row">
              <button className="submit">Express</button>
            </div>
          </div>
        </form>*/}
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
