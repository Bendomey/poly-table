import { getHeaderDetails } from './broker/broker'
import type { ColumnProps, HeaderProps } from './types'
import usePage from './use-page'
import usePagination from './use-pagination'

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

interface OutputProps {
  headerData: HeaderProps
  paginationData: FooterProps
}

interface Props {
  limit: number
  skip?: number
  cols: ColumnProps[]
  total: number | null
}

const useTable = ({
  limit: getLimit,
  skip: getSkip,
  cols,
  total
}: Props): OutputProps => {
  const { end, limit, setEnd, setSkip, skip } = usePagination({
    getLimit,
    getSkip
  })
  const { page } = usePage({ total, limit })
  //header data to be used
  const headerData: HeaderProps = {
    col: getHeaderDetails(cols)
  }

  const getCurrentPage = () => {
    if (skip === 0) return 0
    else return skip / limit
  }

  const goToPage = (index: number) => {
    setSkip(index * limit)
  }

  const goNext = () => {
    setSkip(skip + limit)
    setEnd(skip + limit)
  }

  const goPrev = () => {
    setSkip(skip - limit)
    setEnd(skip - limit)
  }

  const paginationData: FooterProps = {
    currentPage: getCurrentPage(),
    pages: page,
    goToPage,
    goNext,
    goPrev,
    disablePrevButton: skip === 0,
    disableNextButton: skip + limit >= (total || 0),
    firstDataIndexInPage: skip + 1,
    lastDataIndexInPage: end > (total || 0) ? total || 0 : end
  }

  return {
    headerData,
    paginationData
  }
}

export default useTable
