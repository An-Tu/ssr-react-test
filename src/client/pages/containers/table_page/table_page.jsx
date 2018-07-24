import React from 'react';
import { connect } from 'react-redux';
import { fetchTable } from 'src/client/actions';
import TablePage from 'src/client/pages/components/table_page';

@connect(state => ({
  items: state.items,
}), {
  fetchTable,
})
class TablePageCont extends React.Component {
  static getDataBeforeRender(store) {
    return store.dispatch(fetchTable());
  }

  componentDidMount() {
    this.props.fetchTable();
  }

  getHeaderConfig() {
    return [
      { id: 0, title: 'Header title 1' },
      { id: 1, title: 'Header title 2' },
      { id: 2, title: 'Header title 3' },
      { id: 3, title: 'Header title 4' },
      { id: 4, title: 'Header title 5' },
    ];
  }

  render() {
    return (
      <TablePage items={this.props.items} headerConf={this.getHeaderConfig()} />
    );
  }
}

export default TablePageCont;
