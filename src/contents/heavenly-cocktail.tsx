import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'

import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import heavenlyCocktailThumbnail from '../assets/heavenly-cocktail-thumbnail.png'

import presentation from '../assets/heavenly-cocktail-presentation.pdf'

import '@react-pdf-viewer/core/lib/styles/index.css'
import { css } from '@emotion/react'

function HeavenlyCocktailContent() {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/_2czg8nmK1k?si=qPlHt1RRvBUuZTaL"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <p>
        Heavenly cocktail은 신화 속 신들의 이야기를 향과 칵테일 컬러로 풀어내는 가공의 향수 브랜드입니다.
        이 브랜드의 향수 판매 키오스크 어플리케이션을 React로 개발했습니다.
      </p>

      <ul>
        <li>
          초기 로딩에 많은 시간이 소요되는 문제를 발견했습니다.
          개발자 도구로 확인하니 리소스 로딩이 주 원인이었습니다.
          SVG 리소스를 PNG와 JPG로 변환 및 압축하여 리소스 크기를 줄이는 한편, CDN을 도입해 네트워크 연결 최적화도 진행했습니다.
          그 결과 리소스 다운로드 시간을 1/5가량으로 단축시킬 수 있었습니다.
        </li>
        <li>
          CSS 3D transforms를 사용해 3D 슬라이더 컴포넌트를 구현했습니다.
        </li>
        <li>
          렌더링 성능을 끌어올리기 위해 Million.js를 도입했습니다.
          각 페이지별로 변하는 부분이 많아야 두 곳 정도였기에 Million.js를 적용하기 좋은 프로젝트였습니다.
        </li>
      </ul>

      <section>
        <p>
          Heavenly cocktail은 'scenter' 팀의 교내 소프트웨어 개발 대회 '제2회 예술적인 소프트웨어' 참가작입니다.
          저는 웹 개발자로 팀에 합류해 메인 페이지와 장소 선택 페이지, 키워드 선택 페이지를 비롯한 몇 개 페이지와 컴포넌트를 개발했습니다.
          저희 팀은 heavenly cocktail로 예술적인 소프트웨어 대회에서 대상을, 교내 소프트웨어 경진 대회인 ‘2023 소프트웨어 페스티벌’의 웹 부문에서 우수상을 수상했습니다.
          프로젝트에 대한 자세한 사항은 저희 팀의 발표 자료에서 확인할 수 있으십니다.
        </p>
        <div css={css`
          height: 15rem;
          
          margin: 0.8rem;
          
          @media (min-width: 1024px) {
            height: 30rem;
          }
        `}>
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
            <Viewer
              fileUrl={presentation}
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Worker>
        </div>
      </section>

      <p>
        코드는 <a href='https://github.com/s-center/kiosk'>GitHub 저장소</a>에서 확인할 수 있으십니다.
      </p>

      <blockquote>
        1080x1920 키오스크 기기에서 사용하는 것을 상정하고 만들어 데스크탑 및 모바일 기기에서 화면이 잘려 보일 수 있습니다.
        브라우저의 화면 배율 조정 기능을 이용해 배율을 축소시킨 후 체험해주시기를 부탁드리겠습니다.
      </blockquote>
    </>
  )
}

const heavenlyCocktail: Content = {
  id: 'heavenly-cocktail',
  title: 'Heavenly cocktail',
  thumbnail: heavenlyCocktailThumbnail,
  categories: ['Web application'],
  description: '향수 판매 키오스크 어플리케이션',
  filterTags: [FilterTags.ALL, FilterTags.React],
  content: <HeavenlyCocktailContent/>,
  playground: 'https://heavenly-coctail.netlify.app/',
  isLiked: false
}

export default heavenlyCocktail