import React, { Component } from 'react'
import ReactTable from 'react-table';
import styled from 'styled-components';

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

export default class Main extends Component {

  generateLocationCell = row => (
    <span>
      <span style={{
            color: row.value === 'Outside' ? '#ff2e00' : '#57d500',
            transition: 'all .3s ease',
          }}
      >
            &#x25cf;
      </span>

      {'  '}{row.value}
    </span>
  );

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
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      Header: 'Location',
      accessor: 'location',
      Cell: this.generateLocationCell,
    }];

    return (
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
    )
  }
}
