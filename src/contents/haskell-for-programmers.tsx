import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import { css } from '@emotion/react'

import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import haskellForProgrammersThumbnail from '../assets/haskell-for-programmers-thumbnail.png'
import presentation from '../assets/haskell-for-programmers-presentation.pdf'

function HaskellForProgrammersContent() {
  return (
    <>
      <p>
        <a href='https://www.youtube.com/live/98lnZFjdpYw?si=gTsSGSydk1LbKl-2&t=13159'>제1회 한국 하스켈 학교 함수형 개발 세미나</a>에서 하스켈 기초 강의를 진행했습니다.
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
  id: 'haskell-for-programmers',
  title: '프로그래머를 위한 하스켈',
  thumbnail: haskellForProgrammersThumbnail,
  categories: ['haskell'],
  description: '제1회 한국 하스켈 학교 세미나에서 하스켈 튜토리얼을 진행',
  filterTags: [FilterTags.ALL],
  content: <HaskellForProgrammersContent />,
  isLiked: false
}

export default feconf2018