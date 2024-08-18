import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core'
import { css } from '@emotion/react'

import { Content } from './content.ts'
import { FilterTags } from '../Index.tsx'

import es10Thumbnail from '../assets/es10-thumbnail.png'
import presentation from '../assets/ES10-presentation.pdf'

function Es10PreviewContent() {
  return (
    <>
      <p>
        <a href='https://festa.io/events/212'>'프론트엔드와 무관합니다만, '</a>에서 ECMAScript 10의 새 표준을 소개했습니다.
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

const es10Preview: Content = {
  id: 'es10',
  title: 'ES10 미리보기',
  thumbnail: es10Thumbnail,
  categories: ['javascript', 'specification'],
  description: '\'프론트엔드와 무관합니다만, \' 행사에서 ECMAScript 10의 새 표준을 소개',
  filterTags: [FilterTags.ALL],
  content: <Es10PreviewContent />,
  isLiked: false
}

export default es10Preview