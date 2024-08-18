import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import jsconf2020Thumbnail from '../assets/jsconf-2020-thumbnail.png'

function Jsconf2020Content() {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/Urj-aaxB6mE?si=nBjqqff-W6bJZvOs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <p>
        <a href='https://2020.jsconf.kr/ko/speakers/jaewon'>JSConf Korea 2020</a>에서 보일러플레이트 코드를 정리하는 방법으로 함수형 프로그래밍을
        소개했습니다.
      </p>
    </>
  )
}

const jsconf2020: Content = {
  id: 'jsconf2020',
  title: '코드 인수분해 -- 보일러플레이트 코드 정리하기',
  thumbnail: jsconf2020Thumbnail,
  categories: ['functional programming'],
  description: 'JSConf Korea 2020에서 보일러플레이트 코드를 정리하는 방법으로 함수형 프로그래밍을 소개',
  filterTags: [FilterTags.ALL],
  content: <Jsconf2020Content/>,
  isLiked: false
}

export default jsconf2020