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
  paginationGroup?: number[];
}

interface OutputProps {
  headerData: HeaderProps
  paginationData: FooterProps
}

interface Props {
  limit: number
  skip?: number
  cols: ColumnProps[]
  total: number | null,
  pageLimit?: number
}

const useTable = ({
  limit: getLimit,
  skip: getSkip,
  cols,
  pageLimit = 5,
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

  const getPaginationGroup = (): number[] => {
    let start = Math.floor((getCurrentPage() - 1) / pageLimit) * pageLimit;
    return new Array(page.length).fill(0).map((_, idx) => start + idx + 1);
  }

  const paginationData: FooterProps = {
    currentPage: getCurrentPage(),
    pages: getPaginationGroup(),
    goToPage,
    goNext,
    goPrev,
    disablePrevButton: skip === 0,
    disableNextButton: skip + limit >= (total || 0),
    firstDataIndexInPage: skip + 1,
    lastDataIndexInPage: end > (total || 0) ? total || 0 : end,
    // paginationGroup: getPaginationGroup()
  }

  return {
    headerData,
    paginationData
  }
}

export default useTable
