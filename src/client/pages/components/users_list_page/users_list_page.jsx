import React from 'react';
import { Helmet } from 'react-helmet';

class UserList extends React.Component {
  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>
        {user.name}
      </li>
    ));
  }

  renderHeadTags() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeadTags()}
        {'Here\'s a big list of users:'}
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

export default UserList;
