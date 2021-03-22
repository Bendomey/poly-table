import type { ColumnProps, HeaderDetailsProps } from '../types'

export const getHeaderDetails = (cols: ColumnProps[]): HeaderDetailsProps[] =>
  cols?.map((col: ColumnProps) => {
    return {
      name: col?.name,
      headerStyle: col?.headerStyle
    }
  })

export const getAccessor = (accessor: any, data: any, optional = null) =>
  accessor
    .split('.')
    .reduce((o: any, i: number) => o[i] || optional || 'N/A', data)

export const getText = (arr: any[], data: any) => {
  let newString: string = ''
  arr.map((word) => {
    newString += `${
      getAccessor(word, data)?.replace(/(<([^>]+)>)/gi, '') || 'Not Specified'
    } `
  })
  return newString
}

export const truncate = (data: string, truncate: number | null = null) => {
  if (truncate) {
    if (data.split('').length > truncate) {
      return data.split('').slice(0, truncate).join('') + '...'
    }
    return data
  }
  return data
}
