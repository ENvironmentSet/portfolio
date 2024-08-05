import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import tsTransformerTypeRepThumbnail from '../assets/tstransformertyperep-thumbnail-demo.png' //@TODO

const tsTransformerTyperep: Content = {
  key: 'ts-transformer-typerep',
  title: 'ts-transformer-typerep',
  thumbnail: tsTransformerTypeRepThumbnail,
  categories: ['typescript', 'transformer'],
  stars: 19,
  description: 'A typescript custom transformer which enables a programmer to pull down type-level(compile time) information into value level(runtime).',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: null, //@TODO
  playground: '', //@TODO
  isLiked: false
}

export default tsTransformerTyperep