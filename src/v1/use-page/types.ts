export interface UsePageInputProps {
  total: number | null
  limit: number
}

export interface UsePageOutputProps {
  page: number[]
  setPage: React.Dispatch<React.SetStateAction<number[]>>
}
