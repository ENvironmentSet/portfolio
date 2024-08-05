import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import hyogwaThumbnail from '../assets/hyogwa-thumbnail-demo.png' //@TODO

const hyogwa: Content = {
  id: 'hyogwa',
  title: 'hyogwa',
  thumbnail: hyogwaThumbnail,
  categories: ['effect system', 'typescript'],
  stars: 55,
  description: 'Natural 🌿 effect system that fits TypeScript',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: null, //@TODO
  playground: 'ashdaudhaud', //@TODO
  isLiked: false
}

export default hyogwa