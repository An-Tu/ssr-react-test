import React from 'react';

const AdminsListPage = ({ admins }) => {
  const list = admins.map(admin => (
    <li key={admin.id}>{admin.name}</li>
  )); 

  return (
    <div>
      <h3>Protectedlis list of admins</h3>
      <ul>{list}</ul>
    </div>
  ); 
};

export default AdminsListPage;
