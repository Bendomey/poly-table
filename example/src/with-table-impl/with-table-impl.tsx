import * as React from 'react'
import { Table } from 'poly-table'
import type { ColumnProps } from 'poly-table/dist/v1/types'

const data = {
  entityData: [
    {
      id: 1,
      name: 'Entity 1'
    }
  ],
  total: 2
}

const WithTableImplementation = () => {
  const cols: ColumnProps[] = [
    {
      name: 'Entity Name',
      rows: [],
      type: 'only-text',
      headerStyle: {
        align: 'center',
        flex: 2
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
  return (
    <React.Fragment>
      <div className={'container'}>
        <Table
          limit={10}
          cols={cols}
          total={data?.total}
          data={data?.entityData}
        />
      </div>
    </React.Fragment>
  )
}

export default WithTableImplementation
