import { Content } from './content.ts'
import { applyLikes, loadLikes } from '../Likes.tsx'

import hyogwa from './hyogwa.tsx'
import lambda2wasm from './lambda2wasm.tsx'
import overcurried from './overcurried.tsx'
import oversomething from './oversomething.tsx'
import tsTransformerTyperep from './ts-transformer-typerep.tsx'
import esone from './esone.tsx'
import heavenlyCocktail from './heavenly-cocktail.tsx'

const index: Content[] = applyLikes([
  hyogwa,
  tsTransformerTyperep,
  esone,
  lambda2wasm,
  overcurried,
  oversomething,
  heavenlyCocktail
], loadLikes())

export default index;