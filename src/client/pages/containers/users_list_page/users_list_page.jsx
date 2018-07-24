import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from 'src/client/actions';
import UserListPage from 'src/client/pages/components/users_list_page';

@connect(state => ({
  users: state.users, 
}), {
  fetchUsers,
})
class UserListPageCont extends React.Component {
  static getDataBeforeRender(store) {
    return store.dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <UserListPage users={this.props.users} />;
  }
}

export default UserListPageCont;
