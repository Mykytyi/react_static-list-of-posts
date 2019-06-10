import React from 'react';
import User from './User';
import CommentList from './CommentList';

class Post extends React.Component {
  render() {
    const post = this.props.postDetails;

    return (
      <div className="post">
        <h2>{post['title'].toUpperCase()}</h2>
        <p>{post['body']}</p>
        <User authorId={post['userId']}/>
        <CommentList postId={post['id']}/>
      </div>
    );
  }
}

export default Post;