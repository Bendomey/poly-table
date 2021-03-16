import React from 'react'

import useTable, { usePagination } from 'poly-table'
import type { ColumnProps } from 'poly-table/dist/v1/types'
import 'poly-table/dist/index.css'
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
      accessor: 'name'
    },
    {
      name: 'Created At',
      rows: [],
      type: 'only-text',
      accessor: 'name'
    }
  ]
  const { end, limit, setEnd, setSkip, skip } = usePagination({
    getLimit: 1
  })
  const { paginationData } = useTable({
    cols: cols,
    end,
    limit,
    setEnd,
    setSkip,
    skip,
    total: data?.total
  })
  return (
    <React.Fragment>
      <div className={'container'}>
        <table>
          <TableHead cols={cols} />

          <Footer
            skip={skip}
            setSkip={setSkip}
            end={end}
            total={data?.total}
            limit={limit}
            setEnd={setEnd}
            currentPage={paginationData.currentPage}
            pages={paginationData.pages}
          />
        </table>
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
