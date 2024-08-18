import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import { css } from '@emotion/react'

import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import feconf2018Thumbnail from '../assets/feconf2018-thumbnail.png'
import presentation from '../assets/feconf2018-presentation.pdf'

function Feconf2018Content() {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/x4jaA3MMGSQ?si=HjSFCE3OILw-l6h1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <p>
        <a href='https://2018.feconf.kr'>FEConf 2018</a>에서 자바스크립트 표준에 기여한 경험을 발표했습니다.
      </p>

      <div css={css`
          height: 15rem;
          
          margin: 0.8rem;
          
          @media (min-width: 1024px) {
            height: 30rem;
          }
        `}>
        <Viewer
          fileUrl={presentation}
          defaultScale={SpecialZoomLevel.PageFit}
        />
      </div>
    </>
  )
}

const feconf2018: Content = {
  id: 'feconf2018',
  title: 'TC39 스펙에 대한 주관적 참견 시점',
  thumbnail: feconf2018Thumbnail,
  categories: ['javascript', 'specification'],
  description: '자바스크립트 명세 기여를 주제로 한 FEConf 2018에서의 발표',
  filterTags: [FilterTags.ALL, FilterTags.OSS],
  content: <Feconf2018Content/>,
  isLiked: false
}

export default feconf2018