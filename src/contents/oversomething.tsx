import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'
import { Link } from 'wouter'

import oversomethingThumbnail from '../assets/oversomething-thumbnail.png'

function OversomethingContent() {
  return (
    <>
      <p>
        Gatsby 블로그 스타터입니다.
        <a href='https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog'>gatsby-starter-blog</a>를 역설계하여 만들었으며 디자인과 컨셉은 Dan abramov의 <a href='https://overreacted.io'>overreacted</a>를 참고했습니다.
        이후 제 블로그인 <Link to='/items/overcurried'>overcurried</Link>를 만드는 데 사용했습니다.
      </p>

      <ul>
        <li>
          <code>gatsby-starter-blog</code>가 마크다운 문서로부터 웹 페이지를 생성하는 과정을 따라가며 Gatsby가 CMS로서 동작하는 방식을 살펴보았습니다.
          문서를 비롯한 각종 데이터를 Node로 모델링해 취급하는 API가 특히나 기억에 남았습니다.
        </li>
        <li>
          Node를 읽고 처리하기 위해서 GraphQL을 공부했습니다.
          데이터 접근 레이어를 추상화시켜 클라이언트를 데이터 관리 시스템으로부터 분리할 수 있다는 점이 이상적이었습니다.
          구조 분해 할당을 닮은 친숙한 문법도 읽기에 편리했습니다.
        </li>
        <li>
          많은 사용자에게 노출될 수 있도록 검색 엔진 최적화를 진행했습니다.
          Open Graph 태그를 비롯한 다양한 메타 태그를 사용해 페이지를 분석하기 용이하게 만들었습니다.
          또한 site map을 생성하는 플러그인과 <code>robots.txt</code>를 생성하는 플러그인을 적용하기도 했습니다.
        </li>
        <li>
          - PWA에 흥미를 갖고 몇 가지 기술을 적용했습니다.
          <code>manifest.json</code>를 설정해 로컬에 설치할 수 있도록 만들었으며, <code>gatsby-plugin-offline</code> 플러그인을 적용해 오프라인 이용이 가능하도록 만들었습니다.
        </li>
      </ul>

      <p>
        코드는 <a href='https://github.com/ENvironmentSet/oversomething'>GitHub 저장소</a>에서 확인할 수 있으십니다.
      </p>
    </>
  )
}

const oversomething: Content = {
  id: 'oversomething',
  title: 'oversomething',
  thumbnail: oversomethingThumbnail,
  categories: ['gatsby', 'typescript'],
  stars: 8,
  description: 'Gatsby 블로그 스타터',
  filterTags: [FilterTags.ALL, FilterTags.TS, FilterTags.OSS, FilterTags.React],
  content: <OversomethingContent />,
  playground: 'https://oversomething.netlify.app',
  isLiked: false
}

export default oversomething