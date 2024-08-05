import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import overcurriedThumbnail from '../assets/overcurried-thumbnail-demo.png' //@TODO

const overcurried: Content = {
  key: 'overcurried',
  title: 'overcurried',
  thumbnail: overcurriedThumbnail,
  categories: ['blog'],
  stars: 13,
  description: `Personal blog of Jaewon Seo. I believe that knowledge becomes valuable only when we share it with others.`,
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS, FilterTags.React],
  content: null, //@TODO
  playground: '', //@TODO
  isLiked: false
}

export default overcurried