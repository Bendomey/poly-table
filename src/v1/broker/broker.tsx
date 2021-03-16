import type { ColumnProps } from '../types'
import type { HeaderDetailsProps } from './types'

export const getHeaderDetails = (cols: ColumnProps[]): HeaderDetailsProps[] =>
  cols?.map((col: ColumnProps) => {
    return {
      name: col?.name,
      headerStyle: col?.headerStyle
    }
  })
