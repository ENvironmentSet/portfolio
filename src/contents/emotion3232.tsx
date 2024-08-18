import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import emotion3232Thumbnail from '../assets/emotion-3232-thumbnail.png'

function Emotion3232Content() {
  return (
    <>
      <p>
        <code>@emotion/react</code>는 <code>css</code>라는 이름의 prop을 통해 엘리먼트를 스타일링하는 방법을 제공합니다.
        스타일링 가능한 모든 jsx element에 대해 <code>css</code> prop을 정의하기 위해 emotion은 <code>JSX</code> namespace를 정의합니다.
        이때 컴포넌트가 조건부로 스타일링 가능한 경우에 <code>css</code> prop이 제대로 정의되지 않는 문제가 있었습니다.
        이 문제를 <a href='https://github.com/emotion-js/emotion/issues/3185'>보고하고</a> 직접 고쳤습니다.
      </p>

      <p>자세한 정보는 <a href='https://github.com/emotion-js/emotion/pull/3232'>pull request</a>에서 확인할 수 있으십니다.</p>
    </>
  )
}

const emotion3232: Content = {
  id: 'emotion#3232',
  title: 'emotion#3232',
  thumbnail: emotion3232Thumbnail,
  categories: ['jsx transformation', 'contribution'],
  description: 'emotion 프로젝트 코드 기여',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS],
  content: <Emotion3232Content />,
  isLiked: false
}

export default emotion3232