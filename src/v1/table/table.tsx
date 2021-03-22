import * as React from 'react'
import type { ColumnProps, ThemeProps } from '../types'
import useTable from '../use-table'
import TableHead from './header'
import TableFooter from './footer'

interface Props {
  limit: number
  skip?: number
  cols: ColumnProps[]
  total: number
  data: any
  type?: 'striped' | 'raw'
  theme?: ThemeProps
}

const TableComponent: React.FC<Props> = ({
  limit,
  skip,
  cols,
  total,
  theme
}) => {
  const { headerData, paginationData } = useTable({
    cols: cols,
    limit,
    skip, // skip can be undefined ... it'd be defaulted to 0 though
    total: total
  })

  return (
    <React.Fragment>
      <div className={'flex flex-col'}>
        <div className='-my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <table className='min-w-full border-none'>
            <thead>
              <TableHead col={headerData?.col} />
            </thead>
            <tbody className='bg-white'></tbody>
          </table>
          <div className='align-middle inline-block min-w-full shadow  sm:rounded-none'></div>
        </div>
      </div>

      <TableFooter
        theme={theme}
        total={total}
        paginationData={paginationData}
      />
    </React.Fragment>
  )
}

TableComponent.defaultProps = {
  type: 'striped',
  theme: {
    tailwind: true,
    color: 'blue'
  }
}

export default TableComponent
