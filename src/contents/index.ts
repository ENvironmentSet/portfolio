import { Content } from './content.ts'
import { applyLikes, loadLikes } from '../Likes.tsx'

import hyogwa from './hyogwa.tsx'
import lambda2wasm from './lambda2wasm.tsx'
import overcurried from './overcurried.tsx'
import oversomething from './oversomething.tsx'
import tsTransformerTyperep from './ts-transformer-typerep.tsx'
import esone from './esone.tsx'
import heavenlyCocktail from './heavenly-cocktail.tsx'
import emotion3232 from './emotion3232.tsx'
import refsAndTheDom from './refs-and-the-dom.tsx'
import ecma262 from './ecma262.tsx'
import feconf2018 from './feconf2018.tsx'

const index: Content[] = applyLikes([
  hyogwa,
  tsTransformerTyperep,
  esone,
  lambda2wasm,
  overcurried,
  oversomething,
  heavenlyCocktail,
  emotion3232,
  refsAndTheDom,
  ecma262,
  feconf2018
], loadLikes())

export default index;