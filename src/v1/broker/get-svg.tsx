import * as React from 'react'
type TypeOptionsProps =
  | 'view'
  | 'edit'
  | 'workflow'
  | 'generate'
  | 'archive'
  | 'transfer'
  | 'delete'

const getSvg = (type: TypeOptionsProps) => {
  switch (type) {
    case 'view':
      return (
        <svg
          width={18}
          height={18}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={1}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-eye'
        >
          <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
          <circle cx={12} cy={12} r={3} />
        </svg>
      )
    case 'edit':
      return (
        <svg
          width={18}
          height={18}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={1}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-edit'
        >
          <path d='M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7' />
          <path d='M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z' />
        </svg>
      )
    case 'workflow':
      return (
        <svg
          width={18}
          height={18}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={1}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-flag'
        >
          <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
          <path d='M4 22L4 15' />
        </svg>
      )
    case 'generate':
      return (
        <svg
          width={18}
          height={18}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={1}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-send'
        >
          <path d='M22 2L11 13' />
          <path d='M22 2L15 22 11 13 2 9 22 2z' />
        </svg>
      )

    case 'delete':
      return (
        <svg
          width={18}
          height={18}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      )
    case 'archive':
      return (
        <svg
          width={18}
          height={18}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
          />
        </svg>
      )
    case 'transfer':
      return (
        <svg
          width={18}
          height={18}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
          />
        </svg>
      )
    default:
      return
  }
}

export default getSvg
