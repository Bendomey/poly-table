import React from 'react'

import useTable from 'poly-table'
import type { ColumnProps } from 'poly-table/dist/v1/types'
import TableHead from './header'
import Footer from './footer'

const data = {
  entityData: [
    {
      id: 1,
      name: 'Entity 1'
    }
  ],
  total: 2
}

const WithHookImplmentation = () => {
  const cols: ColumnProps[] = [
    {
      name: 'Entity Name',
      rows: [],
      type: 'only-text',
      headerStyle: {
        align: 'center'
      },
      accessor: 'name'
    },
    {
      name: 'Created At',
      rows: [],
      headerStyle: {
        align: 'center'
      },
      type: 'only-text',
      accessor: 'name'
    }
  ]

  const { paginationData, headerData } = useTable({
    cols: cols,
    limit: 1,
    // skip, // you can add skip here
    total: data?.total
  })
  return (
    <React.Fragment>
      <div className={'container'}>
        <table>
          <TableHead cols={headerData} />
        </table>
        <Footer total={data?.total} paginationData={paginationData} />
      </div>

      <style>
        {`
          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }

          table {
            width:100%
          }

          .container {
            margin-left:5vw;
            margin-right:5vw;
            margin-top:2vw;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default WithHookImplmentation
