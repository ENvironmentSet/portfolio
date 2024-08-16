import { css } from '@emotion/react'
import { Link } from 'wouter'

import { IoIosArrowBack, IoMdInformationCircle } from 'react-icons/io'
import { IoDocumentSharp } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'

import Color from './colors.ts'

const AboutStyle = {
  header: css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0.8rem;
    
    border-bottom: 1px solid ${Color.secondaryText};
    
    font-size: 1.4rem;
    
    @media (max-width: 1023px) {
      position: relative;
    }
    
    @media (min-width: 1024px) {
      margin: 0 12%;
      
      font-size: 1.8rem;
    }
  `,
  backButton: css`
    position: absolute;
    left: 1.8rem;
    
    height: 1.4rem;
    width: 1.4rem;
    
    @media (min-width: 1024px) {
      display: none;
    }
  `,
  main: css`
    padding: 2rem 20%;
  `,
  highlight: css`
    color: ${Color.highlight};
    font-weight: bold;
  `,
  navBar: css`
    position: absolute;
    top: 5.5rem;
    left: 0;
      
    padding: 1.5rem 1.5rem;
    
    font-size: 1rem;
      
    height: auto;
      
    border: none;
    border-right: 2px solid ${Color.secondaryText};
    
    @media (max-width: 1023px) {
      display: none;
    }
  `,
  navList: css`
    height: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    
    list-style-type: none;
    
    padding-left: 0px;
  `,
  navItem: css`
    flex-grow: 1;
    
    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      background-color: transparent;
      
      border: 0px;
      padding: 0px;
      
      width: 100%;
      
      color: ${Color.primaryText};
    }
  `,
}

function About() {
  return (
    <>
      <header css={AboutStyle.header}>
        <IoIosArrowBack onClick={() => history.back()} css={AboutStyle.backButton}/>
        <b>곶감에 대해</b>
        <nav css={AboutStyle.navBar}>
          <ul css={AboutStyle.navList}>
            <li css={AboutStyle.navItem}>
              <Link to='/' asChild>
                <button>
                  <IoDocumentSharp/>
                  <span>포트폴리오</span>
                </button>
              </Link>
            </li>
            <li css={AboutStyle.navItem}>
              <Link to='/likes' asChild>
                <button>
                  <FaHeart/>
                  <span>찜 목록</span>
                </button>
              </Link>
            </li>
            <li css={AboutStyle.navItem}>
              <Link to='/about' asChild>
                <button>
                  <IoMdInformationCircle/>
                  <span>곶감에 대해</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
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