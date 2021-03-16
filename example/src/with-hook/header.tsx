import * as React from 'react'
import { ColumnProps } from 'poly-table/dist/v1/types'

interface Props {
  cols: ColumnProps[]
}

const TableHead: React.FC<Props> = ({ cols }) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          {cols?.map((col: ColumnProps, i: number) => (
            <React.Fragment key={i}>
              <th>{col.name}</th>
            </React.Fragment>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  )
}

export default TableHead
