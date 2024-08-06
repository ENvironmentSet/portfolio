import { useContext } from 'react'
import { useLocation } from 'wouter'
import { Contents, Content } from './contents/content.ts'
import { CardList, Card } from './Index.tsx'

import { css } from '@emotion/react'

import { IoIosArrowBack } from 'react-icons/io'
import Color from './colors.ts'

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
    height: 90%;
    
    overflow: scroll;
  `
}

function Likes() {
  const { contents } = useContext(Contents)
  const [, navigate] = useLocation()

  return (
    <div css={LikesStyle.page}>
      <header css={LikesStyle.header}>
        <IoIosArrowBack onClick={() => history.back()} css={LikesStyle.backButton} />
        <b>찜 목록</b>
      </header>
      <main css={LikesStyle.main}>
        <CardList>
          {
            contents
              .filter(({ isLiked }) => isLiked)
              .map(({ id, ...cardEntry }) =>
                <Card key={id} {...cardEntry} onClick={() => navigate(`/items/${id}`)} />
              )
          }
        </CardList>
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
  return contents.map(({ id, ...others }) =>
    likes.includes(id) ? { id, ...others, isLiked: true } : {id, ...others}
  )
}

export function persistLikes(contents: Content[]): void {
  localStorage.setItem(
    LIKES_STORAGE_KEY,
    JSON.stringify(contents.filter(({ isLiked }) => isLiked).map(({ id }) => id))
  )
}