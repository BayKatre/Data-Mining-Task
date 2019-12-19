import React from 'react'
import { MDBDataTable } from 'mdbreact';

const Tabledata = props => {
    // console.log(props)
    const data = {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Location',
          field: 'location',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Mag',
          field: 'mag',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Latitude',
          field: 'latitude',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Longitude',
          field: 'longitude',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Depth',
          field: 'depth',
          sort: 'asc',
          width: 100
        }
        ,
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 50
        },
        {
          label: 'Time',
          field: 'time',
          sort: 'asc',
          width: 50
        }
          ],
      rows: props.data
    };
    if(data.rows === [])
      return <></>
    else
      return (
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
    );
}
export default Tabledata
