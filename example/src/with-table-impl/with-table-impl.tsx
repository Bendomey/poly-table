import * as React from 'react'
import { Table } from 'poly-table'
import type { ColumnProps } from 'poly-table/dist/v1/types'

const data = {
  entityData: [
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 1,
      name: 'Entity 1',
      createdAt: new Date()
    },
    {
      id: 2,
      name: 'Entity 1',
      createdAt: new Date()
    }
  ],
  total: 200
}

const WithTableImplementation = () => {
  const cols: ColumnProps[] = [
    {
      name: 'Entity Name',
      rows: [
        {
          type: 'text',
          accessor: ['name'],
          bold: true
        }
      ],
      type: 'only-text',
      headerStyle: {
        align: 'center',
        flex: 2
      },
      accessor: 'name'
    },
    {
      name: 'Created At',
      rows: [
        {
          type: 'date',
          accessor: ['createdAt'],
          format: 'PPPpp'
        }
      ],
      headerStyle: {
        align: 'center'
      },
      type: 'date-time',
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
