import { ReactNode } from 'react'
import { FilterTags } from '../Index.tsx'

export interface Content {
  key: string
  title: string
  thumbnail: string
  categories: string[]
  stars?: number
  description: string
  filterTags: FilterTags[]
  content: ReactNode
  playground?: string
  isLiked: boolean
}