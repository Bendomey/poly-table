import * as React from 'react'
import type { ColumnProps, ThemeProps } from '../types'
import useTable from '../use-table'
import TableHead from './header'
import TableFooter from './footer'
import TableCell from './cell'

interface Props {
  limit: number
  skip?: number
  cols: ColumnProps[]
  total: number
  data: any[]
  type?: 'striped' | 'raw'
  theme?: ThemeProps
}

const TableComponent: React.FC<Props> = ({
  limit,
  skip,
  cols,
  total,
  theme,
  data,
  type
}) => {
  const { headerData, paginationData } = useTable({
    cols: cols,
    limit,
    skip, // skip can be undefined ... it'd be defaulted to 0 though
    total: total
  })

  // lets us know if its striped or raw
  let getBackgroundColorFromType = (i: number) =>
    type === 'raw' ? 'bg-white' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'

  return (
    <React.Fragment>
      <div className={'flex flex-col '}>
        <div className='-my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='align-middle inline-block min-w-full shadow  sm:rounded-none'>
            <table className='min-w-full border-none '>
              <thead className={''}>
                <TableHead col={headerData?.col} />
              </thead>
              <tbody className='bg-white'>
                {data?.map((mem: any, i: number) => (
                  <React.Fragment key={i}>
                    <tr
                      className={
                        getBackgroundColorFromType(i) +
                        ' flex flex-row border-b border-gray-200'
                      }
                    >
                      {cols.map((col: ColumnProps, j: number) => (
                        <React.Fragment key={j}>
                          <TableCell col={col} data={mem} />
                        </React.Fragment>
                      ))}
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
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
