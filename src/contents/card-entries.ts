import { CardEntry, FilterTags } from '../Index.tsx'

import dummyImage from '../assets/dummy.jpeg'

const cardEntries: CardEntry[] = [
  { key: 'hyogwa', title: 'hyogwa', thumbnail: dummyImage, categories: ['effect system', 'framework'], description:'A natural effect system for typescript', stars: 55, filterTags: [FilterTags.ALL, FilterTags.OSS, FilterTags.TS] },
  { key: 'hyogwa2', title: 'hyogwa2', thumbnail: dummyImage, categories: ['effect system', 'framework'], description:'A natural effect system for typescript', stars: 25, filterTags: [FilterTags.ALL, FilterTags.TS] },
  { key: 'hyogwa3', title: 'hyogwa3', thumbnail: dummyImage, categories: ['effect system', 'framework'], description:'A natural effect system for typescript', stars: 35, filterTags: [FilterTags.ALL, FilterTags.React] },
  { key: 'hyogwa4', title: 'hyogwa3', thumbnail: dummyImage, categories: ['effect system', 'framework'], description:'A natural effect system for typescript', stars: 35, filterTags: [FilterTags.ALL, FilterTags.React] },
]

export default cardEntries