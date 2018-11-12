import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactTable from 'react-table';
import { LargePanel } from './ManageView';
import Settings from '../Settings';
import DataMonitor from '../dataRetrieval';

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`

const TableOut = styled(ReactTable)`
  width: 100%;
  background: #22222270;
  color: white;
  font-size: 15px;

`

export default class TablePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    this.updateData();
  }
  
  componentDidMount() {
    DataMonitor.subscribe(this.updateData);
  }

  updateData = async () => {
    const res = await  axios.get(`${Settings.backend}/personnel/un-name`);
    const newData = res.data.map((item) => ({
      TID: item.TID,
      updateTime: item.updateTime,
    }))

    this.setState({ data: newData });
  }

  render() {
    const columns = [{
      Header: 'Unassigned TID',
      accessor: 'TID' // String-based value accessors!
    }, {
      Header: 'Update Time',
      accessor: 'updateTime',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },
    ];

    return (
      <LargePanel>
        <TableContainer>
          <TableOut
          className="-striped -highlight"
          filterable={true}
          sortable={false}
          defaultPageSize={21}
          data={this.state.data}
          columns={columns}
          />

        </TableContainer>
      </LargePanel>
    )
  }
}
