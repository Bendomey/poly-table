import * as React from 'react'
import type { HeaderProps, HeaderDetailsProps } from 'poly-table/dist/v1/types'

interface Props {
  cols: HeaderProps
}

const TableHead: React.FC<Props> = ({ cols }) => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          {cols?.col?.map((col: HeaderDetailsProps, i: number) => (
            <React.Fragment key={i}>
              <th
                className={`px-6 py-3 border-b border-gray-200 bg-gray-50 text-${
                  col?.headerStyle?.align ?? 'left'
                } text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`}
              >
                {col?.name}
              </th>
            </React.Fragment>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  )
}

export default TableHead
