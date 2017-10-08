import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/proposalActions';

class ProposalPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.actions.getProposals();
  }
  componentWillMount(){
    
  }
  componentWillReceiveProps(){

  }

  render() {
    return (
      <div className="content-area">
        {this.props.proposals && this.props.proposals.length && this.props.proposals[0].map((item,index) => (
          <div className="proposal-cube" key={index}>
            <div className="post-content">
            <div className="express-post-header"><a href="#">{item.title}</a></div>
            <div className="express-content">{item.content}</div>
            <div className="express-sub-text express-pill">
              <span className="express-pill-label">Posted</span>
              <span className="express-pill-value">{item.dateCreated}</span>
            </div>
            </div>
            {/*<div className="post-comments">
              <div>
                <input className="express-comment" type="text" placeholder="Comment here"/>
              </div>
              <div>
                <div>Comment 1</div>
                <div>Comment 2</div>
                <div>Comment 3</div>
              </div>
            </div>*/}
          </div>
        ))}
      </div>
    );
  }
}


ProposalPage.propTypes = {
  actions: PropTypes.object.isRequired,
  proposals: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    proposals: state.proposalReducer.proposals
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
)(ProposalPage);
