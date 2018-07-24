import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  auth: state.auth,
});

const Header = ({ auth }) => {
  const authButton = auth
    ? <a href="/api/logout">Logout</a>
    : <a href="/api/auth/google">Login</a>;

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React SSR</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/table">Table</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

const HeaderWithConnect = connect(mapStateToProps)(Header);

export default HeaderWithConnect;
