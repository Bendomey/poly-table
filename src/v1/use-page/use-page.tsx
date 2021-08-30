import * as React from 'react'

import { UsePageInputProps, UsePageOutputProps } from './types'

const usePage = ({ limit, total }: UsePageInputProps): UsePageOutputProps => {
  const [page, setPage] = React.useState<number[]>([1])

  React.useEffect(() => {
    let p = []
    total = total || 0
    for (let i = 0; i < Math.ceil(total / limit); i++) {
      p.push(i + 1)
    }
    setPage(p)
  }, [limit, total])

  return { page, setPage }
}

export default usePage
