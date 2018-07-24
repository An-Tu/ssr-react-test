import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

App.getDataBeforeRender = (store) => {
  return store.dispatch(fetchCurrentUser());
};

export default App;
