import { useContext } from 'react'
import { Link, useLocation } from 'wouter'
import { Contents, Content } from './contents/content.ts'
import { CardList, Card } from './Index.tsx'
import { CustomScroll } from 'react-custom-scroll'

import { css } from '@emotion/react'

import { IoIosArrowBack, IoMdInformationCircle } from 'react-icons/io'
import Color from './colors.ts'
import { IoDocumentSharp } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'

const LikesStyle = {
  page: css`
    height: 100%;
  `,
  header: css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0.8rem;
    
    border-bottom: 1px solid ${Color.secondaryText};
    
   @media (max-width: 1023px) {
      position: relative;
   }
    
    font-size: 1.4rem;
    
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
    height: 90%;
    
    @media (min-width: 1024px) {
      flex-grow: 1;
      height: auto;
      
      padding: 0 12%;
    }
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
  `
}

function Likes() {
  const { contents } = useContext(Contents)
  const [, navigate] = useLocation()

  return (
    <div css={LikesStyle.page}>
      <header css={LikesStyle.header}>
        <IoIosArrowBack onClick={() => history.back()} css={LikesStyle.backButton}/>
        <b>찜 목록</b>
        <nav css={LikesStyle.navBar}>
          <ul css={LikesStyle.navList}>
            <li css={LikesStyle.navItem}>
              <Link to='/' asChild>
                <button>
                  <IoDocumentSharp/>
                  <span>포트폴리오</span>
                </button>
              </Link>
            </li>
            <li css={LikesStyle.navItem}>
              <Link to='/likes' asChild>
                <button>
                  <FaHeart/>
                  <span>찜 목록</span>
                </button>
              </Link>
            </li>
            <li css={LikesStyle.navItem}>
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
      <main css={LikesStyle.main}>
        <CustomScroll heightRelativeToParent='100%'>
          <CardList>
            {
              contents
                .filter(({isLiked}) => isLiked)
                .map(({id, ...cardEntry}) =>
                  <Card key={id} {...cardEntry} onClick={() => navigate(`/items/${id}`)}/>
                )
            }
          </CardList>
        </CustomScroll>
      </main>
    </div>
  )
}

export default Likes

const LIKES_STORAGE_KEY = '@gotgam/likes'

// Returns array of ids
export function loadLikes(): string[] {
  const item = localStorage.getItem(LIKES_STORAGE_KEY)

  if (item) {
    return JSON.parse(item)
  } else return []
}

export function applyLikes(contents: Content[], likes: string[]): Content[] {
  return contents.map(({id, ...others}) =>
    likes.includes(id) ? { id, ...others, isLiked: true } : {id, ...others}
  )
}

export function persistLikes(contents: Content[]): void {
  localStorage.setItem(
    LIKES_STORAGE_KEY,
    JSON.stringify(contents.filter(({ isLiked }) => isLiked).map(({ id }) => id))
  )
}