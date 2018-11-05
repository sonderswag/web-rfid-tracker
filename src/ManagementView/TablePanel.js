import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTable from 'react-table';
import { LargePanel } from './ManageView';

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`

const TableOut = styled(ReactTable)`
  width: 100%;
  background: #22222270;
  /* border: 2px solid red; */
  border: 3px solid #222222;
  color: white;

  font-size: 15px;

`

export default class TablePanel extends Component {
  render() {
    const data = [
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
      {name: 'Tanner Linsley', age: 26, location: 'Outside'},
    ]
   
    const columns = [{
      Header: 'TID',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Time',
      accessor: 'age',
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
          data={data}
          columns={columns}
          />

        </TableContainer>
      </LargePanel>
    )
  }
}
