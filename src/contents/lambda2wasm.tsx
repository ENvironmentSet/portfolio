import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import lambda2wasmThumbnail from '../assets/lambda2wasm-thumbnail-demo.png' //@TODO

const lambda2wasm: Content = {
  id: 'lambda2wasm',
  title: 'lambda2wasm',
  thumbnail: lambda2wasmThumbnail,
  categories: ['compiler', 'web assembly'],
  stars: 18,
  description: 'A Lambda expression compiler targeting web assembly',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: null, //@TODO
  playground: '', //@TODO
  isLiked: false
}

export default lambda2wasm