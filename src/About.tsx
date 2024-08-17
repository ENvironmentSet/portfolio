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
    padding: 2rem;
    
    @media (min-width: 1024px) {
      padding: 2rem 20%;
    }
    
    p {
      margin-top: 1.2rem;
    }
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

        <p>
          백 번 듣는 것은 한 번 보는 것만 못하다고 합니다.
          그간 많은 포트폴리오를 접해오며 늘 아쉬웠던 점은 프로젝트를 실제로 경험해 보지 못한다는 점이었습니다.
          정적인 서류로 준비해야 했었다는 등 저마다의 사정이 있었겠지만, 프로젝트와 분리되어 있는 것은 읽는 내내 제게 불편함으로 다가왔습니다.
          제 포트폴리오를 검토하는 분들께서는 가까이서 제 프로젝트를 살펴볼 수 있으셨으면 했습니다.
          검토자는 직접 살펴볼 수 있어 좋고, 지원자는 정확히 평가받을 수 있어서 좋은 포트폴리오를 만들고 싶었습니다.
          <span css={AboutStyle.highlight}>플레이그라운드 포트폴리오 사이트 곶감은 포트폴리오와 검토자의 거리를 좁히기 위해 기획되었습니다.</span>
        </p>

        <p>
          당근과 포트폴리오 사이트는 많은 부분에서 닮았습니다.
          사람들은 당근에서 물건을 팝니다.
          개발자는 포트폴리오 사이트에서 프로젝트를 소개합니다.
          사람들은 당근에서 갖고 싶은 물건을 고르고, 면접관은 포트폴리오 사이트에서 인상 깊은 프로젝트를 고릅니다.
          당근과 포트폴리오 사이트 모두, 자신이 가진 것의 매력을 보여주려는 사람과 타인이 가진 매력적인 것을 발견하려는 사람이 모이는 장소입니다.
          이 점에서 착안해 포트폴리오 사이트의 <span css={AboutStyle.highlight}>UI를 당근과 유사하게 구성했습니다.</span>
        </p>

        <p>
          이름을 정해야 했습니다.
          당근과 비슷하게 UI를 설계했을지라도 이름까지 같게 할 수는 없었습니다.
          당근의 브랜드를 침범하고 싶지 않았을뿐더러, 더 근본적으로는 저의 포트폴리오 사이트이기 때문에 가장 저 자신스러운 이름을 지어주고 싶었습니다.
          <span css={AboutStyle.highlight}>고민 끝에 언어 유희와 이웃의 정을 느낄 수 있었던 기억을 더해 곶감을 탄생시켰습니다.</span>
        </p>

        <p>
          여기까지가 곶감의 탄생에 대한 이야기입니다. 더 많은 이야기가 궁금하시다면 면접으로 불러 주세요. <span css={AboutStyle.highlight}>제가 곧 가겠습니다.</span>
        </p>
      </main>
    </>
  )
}

export default About