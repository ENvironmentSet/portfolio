import { Content } from './content.ts'
import { applyLikes, loadLikes } from '../Likes.tsx'

import hyogwa from './hyogwa.tsx'
import lambda2wasm from './lambda2wasm.tsx'
import overcurried from './overcurried.tsx'
import oversomething from './oversomething.tsx'
import tsTransformerTyperep from './ts-transformer-typerep.tsx'

const index: Content[] = applyLikes([
  hyogwa,
  tsTransformerTyperep,
  lambda2wasm,
  overcurried,
  oversomething,
], loadLikes())

export default index;