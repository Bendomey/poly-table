import * as React from 'react'

export interface UsePaginationInputtputProps {
  getLimit: number
  getSkip?: number
}

export interface UsePaginationOutputProps {
  skip: number
  setSkip: React.Dispatch<React.SetStateAction<number>>
  limit: number
  currentPage: number
  setLimit: React.Dispatch<React.SetStateAction<number>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const usePagination = ({
  getLimit,
  getSkip
}: UsePaginationInputtputProps): UsePaginationOutputProps => {
  const [skip, setSkip] = React.useState<number>(getSkip || 0)
  const [limit, setLimit] = React.useState<number>(getLimit || 10)
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  return {
    skip,
    setSkip,
    limit,
    setLimit,
    setCurrentPage,
    currentPage
  }
}

export default usePagination
