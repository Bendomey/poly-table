import * as React from 'react'
import { ColumnProps, RowsProps } from '../types'
import getSvg from '../broker/get-svg'
import { getAccessor, truncate, getText } from '../broker/broker'
import { format } from 'date-fns'

interface Props {
  col: ColumnProps
  data: any
}

const Cell: React.FC<Props> = ({ col, data }) => {
  //check for text plus image
  if (col?.type === 'with-image') {
    return (
      <React.Fragment>
        <td
          style={{ flex: col?.headerStyle?.flex || 1 }}
          className={`border-none px-6 py-4 whitespace-no-wrap text-${
            col?.bodyAlign || 'left'
          }`}
        >
          <div className='flex items-center'>
            <div className='flex-shrink-0 h-10 w-10'>
              <img
                className='h-10 w-10 rounded-full cursor-pointer'
                src={
                  col?.accessor
                    ? getAccessor(col?.accessor, data, col?.image)
                    : col?.image
                }
                alt=''
              />
            </div>
            <div className='ml-4'>
              {col.rows.map((r, i) => (
                <React.Fragment key={i}>
                  {r.type === 'text' ? (
                    <React.Fragment>
                      <div
                        className={`text-sm leading-5 ${
                          r.bold ? 'font-medium' : 'font-light'
                        } text-gray-900`}
                      >
                        {r?.accessor &&
                          truncate(getText(r.accessor, data), r?.truncate)}
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={i}>
                      {r?.formatBanner && (
                        <React.Fragment>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold font-light rounded-full bg-${
                              r?.formatBanner(data).bgColor
                            }-100 text-${r?.formatBanner(data).textColor}-800`}
                          >
                            {r?.accessor &&
                              truncate(getText(r.accessor, data), r?.truncate)}
                          </span>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </td>
      </React.Fragment>
    )
  }

  //check for only-text
  if (col.type === 'only-text') {
    return (
      <React.Fragment>
        <td
          style={{ flex: col?.headerStyle?.flex || 1 }}
          className={`border-none px-6 py-4 whitespace-no-wrap text-${
            col?.bodyAlign || 'left'
          }`}
        >
          {col.rows.map((r: RowsProps, i: number) => (
            <React.Fragment key={i}>
              {r.type === 'text' ? (
                <React.Fragment>
                  {r.default ? (
                    <React.Fragment>
                      <div
                        key={i}
                        className={`text-sm leading-5 ${
                          r.bold ? 'font-medium' : 'font-light'
                        } text-gray-900`}
                      >
                        {r.default}
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div
                        key={i}
                        className={`text-sm leading-5 ${
                          r.bold ? 'font-medium' : 'font-light'
                        } text-gray-900`}
                      >
                        {r?.accessor &&
                          truncate(getText(r.accessor, data), r?.truncate)}
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {r?.formatBanner && (
                    <React.Fragment>
                      {r.default ? (
                        <React.Fragment>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                              r?.formatBanner(data).bgColor
                            }-100 text-${r?.formatBanner(data).textColor}-800`}
                          >
                            {r.default}
                          </span>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {r?.accessor &&
                            r?.accessor.map((a: string, j: number) => (
                              <React.Fragment key={j}>
                                {/* {r.list ? (
                                  <React.Fragment>
                                    {data[a].map((list, k) => {
                                      if (k < r?.truncate) {
                                        return (
                                          <React.Fragment key={k}>
                                            <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                                              {list[r.list.accessor]}
                                            </span>{' '}
                                          </React.Fragment>
                                        )
                                      }
                                    })}
                                    {data[a].length > r?.truncate && (
                                      <span>...</span>
                                    )}
                                  </React.Fragment>
                                ) : ( */}
                                <React.Fragment>
                                  <span
                                    className={`px-2 inline-flex text-xs  leading-5 font-semibold rounded-full bg-green-100 text-green-800`}
                                  >
                                    {r?.formatBanner &&
                                      (typeof r?.formatBanner(data[a])?.data ===
                                      'boolean'
                                        ? r?.formatBanner(data[a])?.data
                                          ? 'Yes'
                                          : 'No'
                                        : r?.formatBanner(data[a])?.data)}
                                  </span>
                                </React.Fragment>
                                {/* )} */}
                              </React.Fragment>
                            ))}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </td>
      </React.Fragment>
    )
  }

  //check for date and time
  if (col.type === 'date-time') {
    return (
      <React.Fragment>
        <td
          style={{ flex: col?.headerStyle?.flex || 1 }}
          className={`border-none border-b border-gray-50 px-6 py-4 whitespace-no-wrap text-${
            col?.bodyAlign || 'left'
          }`}
        >
          {col.rows.map((r: RowsProps, i: number) => (
            <React.Fragment key={i}>
              {r?.accessor &&
                r?.accessor.map((a, i) => (
                  <div
                    key={i}
                    className={`text-sm leading-5 ${
                      r.bold ? 'font-medium' : 'font-light'
                    } text-gray-900`}
                  >
                    {format(new Date(data[a]), r?.format || 'PPPpp')}
                  </div>
                ))}
            </React.Fragment>
          ))}
        </td>
      </React.Fragment>
    )
  }

  //check if html element
  if (col?.type === 'html-element') {
    return (
      <React.Fragment>
        <td
          style={{ flex: col?.headerStyle?.flex || 1 }}
          className={`border-gray-100 px-6 py-4 whitespace-no-wrap text-${
            col?.bodyAlign || 'left'
          }`}
        >
          {col.rows.map((r: RowsProps, i) => (
            <React.Fragment key={i}>
              <div
                key={i}
                className={`text-sm leading-5 ${
                  r.bold ? 'font-medium' : 'font-light'
                } text-gray-900`}
              >
                {r?.accessor &&
                  truncate(getText(r?.accessor, data), r?.truncate)}
              </div>
            </React.Fragment>
          ))}
        </td>
      </React.Fragment>
    )
  }

  //check for actions
  if (col?.type === 'actions') {
    return (
      <React.Fragment>
        <td
          style={{ flex: col?.headerStyle?.flex || 1 }}
          className={`px-6 py-4 whitespace-no-wrap text-${
            col?.bodyAlign || 'left'
          }`}
        >
          {col.rows.map(
            (
              {
                type,
                text,
                accessor,
                link,
                onClick,
                svg,
                linkComponent: Link,
                showButton
              }: RowsProps,
              i: number
            ) => (
              <React.Fragment key={i}>
                {showButton && showButton(data) && (
                  <React.Fragment>
                    {type !== 'button' ? (
                      <Link
                        title={text}
                        to={`${link && link}/${
                          data[accessor ? accessor?.[0] : 0]
                        }`}
                        className='w-8 h-8 mr-1 inline-flex border border-grey-500 items-center justify-center rounded-full bg-transparent hover:bg-blue-200'
                      >
                        {svg && getSvg(svg)}
                      </Link>
                    ) : (
                      <button
                        onClick={() => onClick && onClick(data)}
                        title={text}
                        className='w-8 h-8 mr-1 inline-flex border border-grey-500 items-center justify-center rounded-full bg-transparent hover:bg-blue-200 focus:outline-none'
                      >
                        {svg && getSvg(svg)}
                      </button>
                    )}
                  </React.Fragment>
                )}
              </React.Fragment>
            )
          )}
        </td>
      </React.Fragment>
    )
  }

  // check for number type
  if (col?.type === 'number') {
    return (
      <React.Fragment>
        <td
          style={{ flex: col?.headerStyle?.flex || 1 }}
          className={`px-6 py-4 whitespace-no-wrap text-${
            col?.bodyAlign || 'left'
          }`}
        >
          {col.rows.map((r: RowsProps, i: number) => (
            <React.Fragment key={i}>
              <React.Fragment>
                {r?.accessor &&
                  r?.accessor.map((a: string, j: number) => (
                    <div
                      key={j}
                      className={`text-sm leading-5 ${
                        r.bold ? 'font-medium' : 'font-light'
                      } text-gray-900`}
                    >
                      {r?.formatNumber && r?.formatNumber(data[a])}
                    </div>
                  ))}
              </React.Fragment>
            </React.Fragment>
          ))}
        </td>
      </React.Fragment>
    )
  }
  return <React.Fragment />
}

export default Cell
