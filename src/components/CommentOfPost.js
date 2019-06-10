import React from 'react';
import './CommentOfPost.css';

class CommentOfPost extends React.Component {
  render() {
    return (
      <div className='comment'>
        <em>Name: {this.props.name}</em>
        <p>Email: {this.props.email}</p>
        <p>Text: {this.props.body}</p>
      </div>
    );
  }
}

export default CommentOfPost;