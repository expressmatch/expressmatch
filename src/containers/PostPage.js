import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/postActions';
import {history} from '../store/configureStore';

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
          <div className="post-cube" key={index} data-id={index}>
            <div className="post-content">
            <div className="express-post-header"></div>
            <div className="express-content">{item.content}</div>
            <div className="express-sub-text express-pill">
              <span className="express-pill-label">Posted</span>
              <span className="express-pill-value">{item.dateCreated}</span>
            </div>
            </div>
            <div className="post-meta">
              <div className="post-meta-item meta-like">Like</div>
              <div className="post-meta-item meta-comment">Comment</div>
              <div className="post-meta-item meta-share">Copy link</div>
            </div>
            <div className="post-comments-area">
              <div className="express-comment-wrapper">
                <textarea className="express-comment" type="text" placeholder="Say something"></textarea>
              </div>
              <div className="post-comments">
                <div className="post-comment">
                  <div className="comment-from">
                    Express User:
                  </div>
                  <div className="comment-body">
                    Lorem ipsum dore me
                  </div>
                </div>
                <div className="post-comment">
                  <div className="comment-from">
                    Express User:
                  </div>
                  <div className="comment-body">
                    Lorem ipsum dore me
                  </div>
                </div>
                <div className="post-comment">
                  <div className="comment-from">
                    Express User:
                  </div>
                  <div className="comment-body">
                    How are you doing today my friend..
                    In this world you rock my world..
                    I am really appreciate your wok
                  </div>
                </div>
              </div>
            </div>
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
