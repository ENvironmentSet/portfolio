import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import overcurriedThumbnail from '../assets/overcurried-thumbnail.png'

function OvercurriedContent() {
  return (
    <>
      <p>
        지식 공유를 목적으로 만든 개인 개발 블로그입니다. 주로 타입 이론, 함수형 프로그래밍, 타입스크립트와 자바스크립트에 대한 글을 올립니다.
      </p>
      <p>
        9년 전, 인터넷 블로그에 올라온 자바스크립트 튜토리얼을 보며 프로그래밍을 시작했습니다.
        그 이후로 셀 수 없이 많은 사람들의 글을 읽고, 영상을 보고, 코드와 소프트웨어를 사용하며 공부해왔습니다.
        사람들의 선의가 있었기에 지금의 제가 있을 수 있었습니다. 이제는 그 선의에 보답하고자 블로그를 운영하고 있습니다.
        타인을 돕는 거대한 선의의 흐름에 동참하여 더 나은 세상을 만들 수 있어 기쁩니다.
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
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS, FilterTags.React],
  content: <OvercurriedContent />,
  playground: 'https://overcurried.com',
  isLiked: false
}

export default overcurried