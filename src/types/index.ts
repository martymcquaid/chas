export interface User {
  id: string
  slaveName: string
  corruptionLevel: number
  corruptionPoints: number
  daysSinceLastOrgasm: number
  currentCage?: string
  acheLevel: number
  level: string
  joinedAt: Date
}

export interface QuizQuestion {
  id: string
  question: string
  answers: Array<{
    text: string
    corruptionPoints: number
  }>
}

export interface Product {
  id: string
  name: string
  category: string
  trial: number
  price: number
  description: string
  blessings: string[]
  images: string[]
  voiceOver?: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface Prayer {
  text: string
  discountPercentage: number
}

export interface LeaderboardEntry {
  rank: number
  slaveName: string
  daysLocked: number
  verified: boolean
}