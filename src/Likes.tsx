import { useContext } from 'react'
import { Link, useLocation } from 'wouter'
import { Contents } from './contents/content.ts'
import { CardList, Card } from './Index.tsx'

import { css } from '@emotion/react'

import { IoIosArrowBack } from 'react-icons/io'
import { Color } from './colors.ts'

const LikesStyle = {
  page: css`
    height: 100vh;
    height: 100dvh;
  `,
  header: css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0.8rem;
    
    border-bottom: 1px solid ${Color.secondaryText};
    
    position: relative;
    
    font-size: 1.3rem;
  `,
  backButton: css`
    position: absolute;
    left: 1.8rem;
    
    height: 1.3rem;
    width: 1.3rem;
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
        <Link to='/' asChild><IoIosArrowBack css={LikesStyle.backButton} /></Link>
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