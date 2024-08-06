import { css } from '@emotion/react'

import { IoIosArrowBack } from 'react-icons/io'
import Color from './colors.ts'

const AboutStyle = {
  header: css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0.8rem;
    
    border-bottom: 1px solid ${Color.secondaryText};
    
    position: relative;
    
    font-size: 1.4rem;
  `,
  backButton: css`
    position: absolute;
    left: 1.8rem;
    
    height: 1.4rem;
    width: 1.4rem;
  `,
  main: css`
    padding: 2rem;
  `,
  highlight: css`
    color: ${Color.highlight};
    font-weight: bold;
  `
}

function About() {
  return (
    <>
      <header css={AboutStyle.header}>
        <IoIosArrowBack onClick={() => history.back()} css={AboutStyle.backButton} />
        <b>곶감에 대해</b>
      </header>
      <main css={AboutStyle.main}>
        <h1>제가 곧 갑니다 : <span css={AboutStyle.highlight}>곶감</span></h1>

        <p>
          <span css={AboutStyle.highlight}>'곶감'</span>은 저의 주요 활동을 정리한 포트폴리오 사이트입니다.
          단순히 설명을 읽고 사진과 영상을 보는 걸 넘어, 저의 프로젝트를 직접 체험할 수 있는 환경을 제공하고자 제작했습니다.
          이 사이트를 통해 저를 더 잘 이해하실 수 있으셨으면 하는 바람입니다.
        </p>
      </main>
    </>
  )
}

export default About