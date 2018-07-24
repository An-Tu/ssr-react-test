import React from 'react';

const TablePage = ({ items, headerConf }) => {
  const tableHeader = (
    <tr>
      {headerConf.map(el => (
        <th key={el.id}>{el.title}</th>
      ))}
    </tr>
  );

  const tableBody = items.map(el => (
    <tr key={el.id}>
      {Object.values(el).map((tdElem, index) => (
        <td key={index}>{tdElem}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        {tableHeader}
      </thead>
      <tbody>
        {tableBody} 
      </tbody>
    </table>
  );
};

export default TablePage;
