import * as React from 'react'
import type { ThemeProps } from '../types'

interface FooterProps {
  pages: number[]
  currentPage: number
  goToPage: (index: number) => void
  goNext: VoidFunction
  goPrev: VoidFunction
  disablePrevButton: boolean
  disableNextButton: boolean
  firstDataIndexInPage: number
  lastDataIndexInPage: number
}
interface Props {
  total: number
  paginationData: FooterProps
  theme?: ThemeProps
}
const Footer: React.FC<Props> = ({ total, paginationData, theme }) => {
  let themeColor = theme
    ? theme?.tailwind
      ? `bg-${theme?.color}-500`
      : ''
    : ''

  return (
    <React.Fragment>
      <nav className='mt-2 px-4 py-3 flex items-center justify-between sm:px-6'>
        <div className='hidden sm:block'>
          <p className='text-sm font-light leading-5 text-gray-700'>
            Showing
            <span className='font-medium mx-3'>
              {paginationData.firstDataIndexInPage}
            </span>
            to
            <span className='font-medium mx-3'>
              {paginationData.lastDataIndexInPage}
            </span>
            of
            <span className=' font-medium mx-3'>{total}</span>
            results
          </p>
        </div>
        <div className='flex-1 flex justify-between sm:justify-end items-center'>
          <nav className='relative z-0 inline-flex shadow-sm'>
            <button
              disabled={paginationData.disablePrevButton}
              onClick={(e) => {
                e.preventDefault()
                paginationData.goPrev()
              }}
              type='button'
              className={`relative inline-flex ${
                paginationData.disablePrevButton &&
                'cursor-not-allowed opacity-50'
              } items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150`}
              aria-label='Previous'
            >
              <svg
                width={17}
                height={17}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-chevrons-right'
              >
                <path d='M11 17L6 12 11 7' />
                <path d='M18 17L13 12 18 7' />
              </svg>
            </button>

            {paginationData.pages.map((p: number, i: number) => (
              <React.Fragment key={i}>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    paginationData.goToPage(i)
                  }}
                  style={{ color: !theme?.tailwind ? theme?.color : undefined }}
                  type='button'
                  className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium focus:z-10 focus:outline-none ${
                    paginationData.currentPage === i &&
                    `${themeColor} text-white`
                  } transition ease-in-out duration-150`}
                >
                  {p}
                </button>
              </React.Fragment>
            ))}

            <button
              type='button'
              onClick={(e) => {
                e.preventDefault()
                paginationData.goNext()
              }}
              disabled={paginationData.disableNextButton}
              className={`-ml-px relative inline-flex ${
                !paginationData.disablePrevButton &&
                'cursor-not-allowed opacity-50'
              } items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150`}
              aria-label='Next'
            >
              <svg
                width={17}
                height={17}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-chevrons-right'
              >
                <path d='M13 17L18 12 13 7' />
                <path d='M6 17L11 12 6 7' />
              </svg>
            </button>
          </nav>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Footer
