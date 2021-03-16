import * as React from 'react'

interface Props {
  getLimit: number
  getSkip?: number
}

interface Output {
  end: number
  setEnd: React.Dispatch<React.SetStateAction<number>>
  skip: number
  setSkip: React.Dispatch<React.SetStateAction<number>>
  limit: number
  setLimit: React.Dispatch<React.SetStateAction<number>>
}

const usePagination = ({ getLimit, getSkip }: Props): Output => {
  const [end, setEnd] = React.useState<number>(0)
  const [skip, setSkip] = React.useState<number>(getSkip || 0)
  const [limit, setLimit] = React.useState<number>(getLimit || 10)

  React.useEffect(() => {
    setEnd(skip + limit)
  }, [limit, skip])

  return { end, setEnd, skip, setSkip, limit, setLimit }
}

export default usePagination
