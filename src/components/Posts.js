import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts, delPost} from '../actions/postActions';

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
        // console.log("nguyen vanha")
    }

    render() {
        console.log(this.props.message);
        const postItems = this.props.posts.map((post, index) => (
            <div key={post.id} className="post-card">
                <h3>{post.title}
                    <small
                        id={post.id}
                        style={{marginLeft: '50px',color:'#cc082f'}}
                        onClick={this.onDelete.bind(this, post.id)}
                    >delete post </small>
                </h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts fetched
                </h1>
                {postItems}
            </div>
        );
    }
}
//Typechecking
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
//Connect Posts to Store, pass fectPosts and delPost to Posts component
export default connect(mapStateToProps, {fetchPosts, delPost})(Posts);
