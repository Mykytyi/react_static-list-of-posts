import React from 'react';
import {users} from '../users';

class User extends React.Component {
  render() {
    const authorId = this.props.authorId;
    const author = users.find(item => item['id'] === authorId);
    return (
      <div className="userBlock">
        <em>{author['name']}</em>
        <p>Email: {author['email']}</p>
      </div>
    );
  }
}

export default User;