import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, delPost} from '../actions/postActions';

class Posts extends Component {
  
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  onDelete = (index) => {
    this.props.delPost(index)
  }

  render() {
    console.log(this.props.message);
    const postItems = this.props.posts.map((post, index) => (
      <div key={post.id} className="post-card">
        <h3>{post.title}
          <small
           id={post.id} 
           style={{marginLeft:'50px'}}
           onClick={this.onDelete.bind(this,post.id)}
           >delete</small>
        </h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts 
          </h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  delPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.data.items,
  newPost: state.data.item,
  message: state.data.message
});

export default connect(mapStateToProps, { fetchPosts, delPost })(Posts);
