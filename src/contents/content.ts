import { createContext, ReactNode } from 'react'
import { FilterTags } from '../Index.tsx'

export interface Content {
  id: string
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

export const Contents =
  createContext<{ contents: Content[], setContents: (contents: Content[]) => void }>(
    { contents: [], setContents: () => { throw new Error('Define provider for Contents first.') } }
  )