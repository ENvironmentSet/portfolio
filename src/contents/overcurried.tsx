import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import overcurriedThumbnail from '../assets/overcurried-thumbnail.png'

function OvercurriedContent() {
  return (
    <>
      <p>
        무상 지식 공유를 목적으로 만든 비영리 개인 개발 블로그입니다.
        주로 타입 이론, 함수형 프로그래밍, 타입스크립트와 자바스크립트를 다룹니다.
        프로그래밍 공부를 시작한 이래로 입은 많은 은혜에 보답하고자 블로그를 운영하고 있습니다.
      </p>
      <p>
        코드는 <a href='https://github.com/ENvironmentSet/overcurried'>GitHub 저장소</a>에서 확인할 수 있으십니다.
      </p>
    </>
  )
}

const overcurried: Content = {
  id: 'overcurried',
  title: 'overcurried',
  thumbnail: overcurriedThumbnail,
  categories: ['blog'],
  stars: 13,
  description: '개인 개발 블로그',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.React],
  content: <OvercurriedContent />,
  playground: 'https://overcurried.com',
  isLiked: false
}

export default overcurried