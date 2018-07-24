import App from './App.jsx';
import HomePage from './pages/components/home_page';
import UsersListPage from './pages/containers/users_list_page';
import NotFoundPage from './pages/components/not_found_page';
import AdminsListPage from './pages/containers/admins_list_page';
import TablePage from './pages/containers/table_page';

export default [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: '/',
        exact: true,
      },
      {
        component: AdminsListPage,
        path: '/admins',
      },
      {
        component: TablePage,
        path: '/table',
      },
      {
        component: UsersListPage,
        path: '/users',
      },
      {
        component: NotFoundPage,
      },
    ],
  },
];
