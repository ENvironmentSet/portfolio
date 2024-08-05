import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import oversomethingThumbnail from '../assets/oversomething-thumbnail-demo.png' //@TODO

const oversomething: Content = {
  key: 'oversomething',
  title: 'oversomething',
  thumbnail: oversomethingThumbnail,
  categories: ['gatsby', 'typescript'],
  stars: 8,
  description: 'oversomething is modernized Gatsby starter blog',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS, FilterTags.React],
  content: null, //@TODO
  playground: '', //@TODO
  isLiked: false
}

export default oversomething