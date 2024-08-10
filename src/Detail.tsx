import { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'wouter'
import { CustomScroll } from 'react-custom-scroll'

import { css } from '@emotion/react'

import profilePicture from './assets/profile.jpeg'
import { IoIosArrowBack, IoIosHome, IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'

import Color from './colors.ts'
import { Contents } from './contents/content.ts'
import { highlightedButton } from './buttons.tsx'

interface ProfileProps {
  className?: string
}

const ProfileStyle = {
  plane: css`
    display: flex;
    align-items: center;
    
    padding-bottom: 1rem;
    
    border-bottom: 1px solid ${Color.secondaryText};
    
    isolation: isolate;
  `,
  avatar: css`
    border-radius: 45px;
    
    width: 4rem;
    height: 4rem;
    
    object-fit: cover;
  `,
  description: css`
    display: flex;
    flex-direction: column;
    
    margin-left: 0.4rem;
    
    b {
      color: ${Color.primaryText};
    }
    
    span {
      font-size: 0.8rem;
      color: ${Color.secondaryText};
    }
  `,
  laptopTemperature: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
      
    height: 4rem;
    
    margin-left: auto;
  `,
  temperatureText: css`
    color: ${Color.highlight};
  `,
  barBox: css`    
    position: relative;
  `,
  barBackground: css`
    position: absolute;
    
    width: 100%;
    height: 0px;
    
    border: 2px solid ${Color.elementBackground};
    border-radius: 45px;
  `,
  bar: css`
    position: absolute;
    display: block;
    
    width: 82.15%;
    height: 0px;
    
    border: 2px solid ${Color.highlight};
    border-radius: 45px;
  `,
  info: css`
    color: ${Color.secondaryText};
    font-weight: 300;
    font-size: 0.6rem;
    
    margin-top: 0.2rem;
    
    align-self: flex-end;
  `
}

function Profile({ className }: ProfileProps) {
  return (
    <div css={ProfileStyle.plane} className={className}>
      <img css={ProfileStyle.avatar} src={profilePicture} />
      <p css={ProfileStyle.description}>
        <b>Jaewon Seo</b>
        <span>능동</span>
      </p>
      <div css={ProfileStyle.laptopTemperature}>
        <b css={ProfileStyle.temperatureText}>82.15°C</b>
        <div css={ProfileStyle.barBox}>
          <span css={ProfileStyle.barBackground} />
          <span css={ProfileStyle.bar} />
        </div>
        <span css={ProfileStyle.info}>노트북 온도</span>
      </div>
    </div>
  )
}

interface DetailProps {
  id: string
  title: string
  thumbnail: string
  categories: string[]
  content: ReactNode
  playground?: string
  isLiked: boolean
}

const DetailStyle = {
  page: css`
    height: 100%;
  `,
  header: css`
    position: fixed;
    
    width: 100vw;
    
    background-color: transparent;
    
    z-index: 1;
  `,
  navList: css`
    padding: 1rem;
    
    display: flex;
    gap: 1.2rem;
    
    list-style-type: none;
  `,
  navLink: css`
    color: ${Color.primaryText};
    
    height: 1.5rem;
    width: 1.5rem;
  `,
  main: css`
    height: 90%;
  `,
  thumbnail: css`
    height: 50vh;
    height: 50dvh;
    width: 100%;
    
    object-fit: cover;
  `, //@TODO How should I process images?
  articleBox: css`
    padding: 1rem;
  `,
  articleBody: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    word-break: keep-all;
    
    a {
      text-decoration: none;
      color: ${Color.href};
    }
    
    b {
      color: ${Color.highlight};
    }
    
    ol, ul {
      padding-left: 2rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    iframe {
      height: 30rem;
    }
    
    code {
      background-color: ${Color.elementBackground};
      font-size: 0.9rem;
    }
    
    blockquote {
      padding-left: 2rem;
      border-left: 0.5rem solid ${Color.secondaryText};
    }
  `,
  title: css`
    margin-top: 1rem;
  `,
  categories: css`
    padding-left: 0px;
    
    display: flex;
    gap: 0.3rem;
    
    list-style-type: none;
    
    color: ${Color.secondaryText};
    font-size: 0.8rem;
    
    margin-bottom: 1rem;
  `,
  footer: css`
    height: 10%;
    
    border-top: 1px solid ${Color.secondaryText};
    
    padding: 0.8rem;
    
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  heart: css`
    height: 3.8rem;
    width: 3rem;
    
    border-right: 1px solid ${Color.secondaryText};
    
    padding: 1rem 1rem 1rem 0.2rem;
    
    svg {
      height: 100%;
      width: 100%;
    }
  `,
  playground: css`
    margin-left: auto;
    
    padding: 0.6rem;
    
    font-weight: bold;
    text-decoration: none;
  `
}

function Detail({ id: currentContentId, title, thumbnail, categories, content, playground, isLiked }: DetailProps) {
  const [isThumbnailVisible, setThumbnailVisibility] = useState(true)
  const thumbnailRef = useRef<HTMLImageElement>(null)
  const { contents, setContents } = useContext(Contents)

  useEffect(() => {
    if (thumbnailRef.current) {
      const observer = new IntersectionObserver(
        entries => entries.map(({ intersectionRatio }) => setThumbnailVisibility(intersectionRatio <= 0.25)),
        { threshold: [0.25] }
      )

      observer.observe(thumbnailRef.current)

      return () => observer.disconnect()
    }
  })

  return (
    <div css={DetailStyle.page}>
      <header
        css={DetailStyle.header}
        style={isThumbnailVisible ? { backgroundColor: Color.background, borderBottom: `1px solid ${Color.secondaryText}` } : {}}
      >
        <nav>
          <ul css={DetailStyle.navList}>
            <li>
              <IoIosArrowBack onClick={() => history.back()} css={DetailStyle.navLink} />
            </li>
            <li>
              <Link to='/'><IoIosHome css={DetailStyle.navLink} /></Link>
            </li>
          </ul>
        </nav>
      </header>
      <main css={DetailStyle.main}>
        <CustomScroll heightRelativeToParent='100%'>
          <img ref={thumbnailRef} css={DetailStyle.thumbnail} src={thumbnail}/>
          <div css={DetailStyle.articleBox}>
            <Profile/>
            <article>
              <h1 css={DetailStyle.title}>{title}</h1>
              <ul css={DetailStyle.categories}>
                {
                  categories.map((category, index, {length}) =>
                    <li key={category}> {category}{index < length - 1 && ','} </li>
                  )
                }
              </ul>
              <div css={DetailStyle.articleBody}>
                {content}
              </div>
            </article>
          </div>
        </CustomScroll>
      </main>
      <footer css={DetailStyle.footer}>
        <span
          onClick={() =>
            setContents(contents.map(({id, ...others}) =>
              id === currentContentId
                ? ({id, ...others, isLiked: !others.isLiked})
                : ({id, ...others})
            ))
          }
          data-is-liked={isLiked}
          css={DetailStyle.heart}
        >
          {
            isLiked ? <IoIosHeart/> : <IoIosHeartEmpty/>
          }
        </span>
        <p>
          <b>면접 대기중</b>
        </p>
        {
          playground &&
          <a href={playground} css={[highlightedButton, DetailStyle.playground]}>
              <b>체험해보기</b>
            </a>
        }
      </footer>
    </div>
  )
}

export default Detail