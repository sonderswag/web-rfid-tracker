import React, { Component } from 'react'
import ReactTable from 'react-table';
import styled from 'styled-components';
import axios from  'axios';
import Settings from '../Settings';
import dataMonitor from '../dataRetrieval';

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

function toUpper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    this.updateData();
  }

  componentDidUpdate() {
    dataMonitor.subscribe(this.updateData);
  }

  updateData = () => {
    axios.get(`${Settings.backend}/personnel/status`)
    .then((res) => {
      this.setState({data: res.data})
    });
  }

  generateLocationCell = row => (
    <span>
      <span style={{
            color: row.value === 'outside' ? '#ff2e00' : '#57d500',
            transition: 'all .3s ease',
          }}
      >
            &#x25cf;
      </span>

      {'  '}{toUpper(row.value)}
    </span>
  );

  render() {

    const columns = [{
      Header: 'First Name',
      accessor: 'firstName', // String-based value accessors!
      Cell: props => <span className='number'>{toUpper(props.value)}</span> // Custom cell components!
    }, {
      Header: 'Last Name',
      accessor: 'lastName',
      Cell: props => <span className='number'>{toUpper(props.value)}</span> // Custom cell components!
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
        data={this.state.data}
        columns={columns}
        />

      </TableContainer>
    )
  }
}
