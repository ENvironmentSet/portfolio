import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import ecma262Thumbnail from '../assets/ecma-262-thumbnail.png'

function Ecma262Content() {
  return (
    <>
      <p>
        자바스크립트의 표준 명세인 ECMA-262에 기여한 바 있습니다.
      </p>

      <ul>
        <li>
          <a href='https://github.com/tc39/ecma262/issues/1305'>
            Fixing description of [[thisMode]] internal slot of Function Object. #1305
          </a>
        </li>
        <li>
          <a href='https://github.com/tc39/ecma262/issues/1308'>
            Fixing description of [[FunctionKind]] internal slot of Function Object. #1308
          </a>
        </li>
      </ul>
    </>
  )
}

const ecma262: Content = {
  id: 'ECMA-262',
  title: 'ECMA-262',
  thumbnail: ecma262Thumbnail,
  categories: ['javascript', 'specification'],
  description: '자바스크립트 표준 명세 기여',
  filterTags: [FilterTags.ALL, FilterTags.OSS],
  content: <Ecma262Content />,
  isLiked: false
}

export default ecma262