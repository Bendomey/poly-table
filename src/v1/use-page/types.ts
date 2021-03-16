export interface Props {
  total: number | null
  limit: number
}

export interface OutputProps {
  page: number[]
  setPage: React.Dispatch<React.SetStateAction<number[]>>
}
