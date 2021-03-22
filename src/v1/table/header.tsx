import * as React from 'react'
import { HeaderDetailsProps, HeaderProps } from '../types'

const Header: React.FC<HeaderProps> = ({ col: cols }) => {
  return (
    <React.Fragment>
      <tr className={'flex flex-row'}>
        {cols.map((col: HeaderDetailsProps, i: number) => (
          <React.Fragment key={i}>
            <th
              style={{ flex: col?.headerStyle?.flex || 1 }}
              className={`border-gray-100 px-6 py-3 border-b border-gray-200 bg-gray-50 text-${
                col?.headerStyle?.align || 'left'
              } text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`}
            >
              {col.name}
            </th>
          </React.Fragment>
        ))}
      </tr>
    </React.Fragment>
  )
}

export default Header
