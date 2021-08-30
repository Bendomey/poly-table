import { getHeaderDetails } from './broker/broker'
import type {
  HeaderProps,
  UseTableOutputProps,
  UseTableInputProps,
  UseTableFooterProps
} from './types'
import usePage from './use-page'
import usePagination from './use-pagination'

const useTable = ({
  limit: getLimit,
  skip: getSkip,
  cols,
  total
}: UseTableInputProps): UseTableOutputProps => {
  const { limit, setSkip, currentPage, setCurrentPage } = usePagination({
    getLimit,
    getSkip
  })
  const { page } = usePage({ total, limit })

  //header data to be used
  const headerData: HeaderProps = {
    col: getHeaderDetails(cols)
  }

  const goToPage = (index: number): void => {
    setCurrentPage(index)
  }

  const goNext = (page: number): void => {
    setCurrentPage(page)
    setSkip(page * limit)
  }

  const goPrev = (): void => {
    setCurrentPage((prev) => prev - 1)
  }

  const getPaginationGroup = (): number[] => {
    let start: number, end: number
    if (page.length <= 10) {
      start = 1
      end = page.length
    } else {
      if (currentPage <= 6) {
        start = 1
        end = 10
      } else if (currentPage + 4 >= page.length) {
        start = page.length - 9
        end = page.length
      } else {
        start = currentPage - 5
        end = currentPage + 4
      }
    }
    let a = [...Array(end + 1 - start)]
    let b: number[] = []
    a.map((_, i) => {
      b.push(i)
    })
    return b.map((i) => start + i)
  }

  const paginationData: UseTableFooterProps = {
    currentPage: currentPage,
    pages: getPaginationGroup(),
    goToPage,
    goNext,
    goPrev,
    disablePrevButton: currentPage === 1,
    disableNextButton: currentPage >= page.length,
    firstDataIndexInPage:
      currentPage === 1 ? 1 : currentPage * limit - limit + 1,
    lastDataIndexInPage: currentPage === 1 ? limit : currentPage * limit
  }

  return {
    headerData,
    paginationData
  }
}

export default useTable
