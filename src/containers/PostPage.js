import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/postActions';

class PostPage extends React.Component {
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
      <div className="content-area">
        {this.props.posts && this.props.posts.length && this.props.posts[0].map((item,index) => (
          <div className="post-cube" key={index}>
            <div className="post-content">
            <div className="express-post-header"></div>
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


PostPage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.postReducer.posts
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
)(PostPage);
