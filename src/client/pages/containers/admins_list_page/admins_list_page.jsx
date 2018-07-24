import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from 'src/client/actions';
import AdminsListPage from 'src/client/pages/components/admins_list_page';
import requireAuth from 'src/client/hocs/requireAuth';

@requireAuth
@connect(state => ({
  admins: state.admins,
}), {
  fetchAdmins,
})
class AdminsListPageCont extends React.Component {
  static getDataBeforeRender(store) {
    return store.dispatch(fetchAdmins());
  }

  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    return <AdminsListPage admins={this.props.admins} />;
  }
}

export default AdminsListPageCont;
