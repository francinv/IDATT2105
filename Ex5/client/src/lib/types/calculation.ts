import type { Operators } from "@/lib"

interface UserCalculation {
  id: number
  a: number
  b: number
  result: number
  calculationType: Operators
  username: string
}

export interface UserCalculationResponse {
  page: number
  total: number
  totalPages: number
  userCalculations: UserCalculation[]
}
