import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuth = (Component) => {
  class RequireAuth extends React.Component {
    render() {
      switch (this.props.auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>Loading...</div>;
      default:
        return <Component {...this.props} />;
      }
    }
  }

  return connect(state => ({ auth: state.auth }))(RequireAuth);
};

export default requireAuth;
