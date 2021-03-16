// import * as React from 'react'

export interface ColumnProps {
  name: string
  type: 'only-text' | 'with-image' | 'actions' | 'date-time'
  image?: any | null
  accessor?: string | null
  rows: RowsProps[]
  headerStyle?: HeaderStyleProps
}

export interface RowsProps {
  type: 'text' | 'banner' | 'date' | 'number' | 'button'
  bold?: boolean
  format?: string
  formatNumber?: (val: number) => string
  formatBanner?: (val: any) => BannerReturnProps
  accessor?: string[]
  truncate?: number
  onPress?: (data: any) => void
  svg?: 'view' | 'edit' | 'workflow' | 'generate' | 'delete'
}

export interface HeaderStyleProps {
  align?: 'left' | 'right' | 'center'
}

export interface BannerReturnProps {
  data: string
  bgColor: string
  textColor: string
}

export interface HeaderComponentProps {
  cols: ColumnProps[]
}

export interface FooterComponentProps {
  skip: number
  end: number
  total: number
  page: number[]
  setSkip: React.Dispatch<React.SetStateAction<number>>
  setEnd: React.Dispatch<React.SetStateAction<number>>
  limit: number
}

export interface TableCellProps {
  data: any
  col: ColumnProps
}