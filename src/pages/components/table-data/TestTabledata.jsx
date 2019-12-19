import React from 'react'
import { MDBDataTable } from 'mdbreact';

const TestTabledata = props => {
    const data = {
        columns: [
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
export default TestTabledata