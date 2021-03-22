import * as React from 'react'
import { ColumnProps } from '../types'
import useTable from '../use-table'
import TableHead from './header'

interface Props {
  limit: number
  skip?: number
  cols: ColumnProps[]
  total: number | null
  data: any
}

const TableComponent: React.FC<Props> = ({ limit, skip, cols, total }) => {
  const { headerData } = useTable({
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
            <TableHead col={headerData?.col} />
          </table>
          <div className='align-middle inline-block min-w-full shadow  sm:rounded-none'></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TableComponent
