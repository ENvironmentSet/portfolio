import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import refsAndTheDomThumbnail from '../assets/refs-and-the-dom-thumbnail.png'

function RefsAndTheDomContent() {
  return (
    <>
      <p>React의 옛 홈페이지를 한국어로 번역할 당시 'Refs and the DOM' 글을 맡아 번역했습니다.</p>

      <p>자세한 정보는 <a href='https://github.com/reactjs/ko.react.dev/pull/13'>pull request</a>에서 확인할 수 있으십니다.</p>
    </>
  )
}

const refsAndTheDom: Content = {
  id: 'Refs-and-the-DOM',
  title: 'Ref와 DOM',
  thumbnail: refsAndTheDomThumbnail,
  categories: ['translation'],
  description: 'React 공식 문서 번역 기여',
  filterTags: [FilterTags.ALL, FilterTags.React, FilterTags.OSS],
  content: <RefsAndTheDomContent />,
  isLiked: false
}

export default refsAndTheDom