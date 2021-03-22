// import * as React from 'react'

export interface ColumnProps {
  name: string
  type:
    | 'only-text'
    | 'with-image'
    | 'actions'
    | 'date-time'
    | 'number'
    | 'html-element'
  image?: any | null
  accessor?: string | null
  rows: RowsProps[]
  headerStyle?: HeaderStyleProps
  bodyAlign?: 'left' | 'right' | 'center'
}

export interface ThemeProps {
  tailwind: boolean
  color: string
}

export interface HeaderDetailsProps {
  name: string
  headerStyle?: HeaderStyleProps
}

export interface HeaderProps {
  col: HeaderDetailsProps[]
}
export interface RowsProps {
  type: 'text' | 'banner' | 'number' | 'button' | 'date'
  bold?: boolean
  format?: string
  default?: string
  formatNumber?: (val: number) => string
  formatBanner?: (val: any) => BannerReturnProps
  accessor?: string[]
  truncate?: number
  link?: string
  onClick?: (data: any) => void
  text?: string
  linkComponent?: any
  showButton?: (data: any) => boolean
  svg?:
    | 'view'
    | 'edit'
    | 'workflow'
    | 'generate'
    | 'delete'
    | 'archive'
    | 'transfer'
}

export interface HeaderStyleProps {
  align?: 'left' | 'right' | 'center'
  flex?: number
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
