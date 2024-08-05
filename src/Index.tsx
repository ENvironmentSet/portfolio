import { Children, ReactElement, useState, useEffect, useRef } from 'react'

import { Link } from 'wouter'

import { css } from '@emotion/react'

import { Color } from './colors.ts'
import { GoStar, GoSearch } from 'react-icons/go'
import { FiAlignJustify } from 'react-icons/fi'
import { SiTypescript } from 'react-icons/si'
import { FaReact, FaGithub, FaHeart } from 'react-icons/fa'
import { DiOpensource } from 'react-icons/di'
import { IoDocumentSharp } from 'react-icons/io5'
import { IoMdInformationCircle } from 'react-icons/io'
import { highlightedButton, plainButton } from './buttons.tsx'

interface CardProps {
  title: string
  thumbnail: string
  categories: string[]
  description: string
  stars?: number
  onClick?: () => void
  className?: string
}

const CardStyle = {
  plane: css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 2rem 2rem 8rem;
    grid-template-areas:
      'thumbnail title'
      'thumbnail categories'
      'thumbnail description';
    grid-column-gap: 1.5rem;
  `,
  thumbnail: css`
    grid-area: thumbnail;
    
    border-radius: 10px;
    
    height: 100%;
    width: 100%;
    object-fit: cover;
  `,
  title: css`
    grid-area: title;
    
    font-weight: normal;
  `,
  categories: css`
    grid-area: categories;
    
    padding-left: 0px;
    
    display: flex;
    gap: 0.3rem;
    
    list-style-type: none;
    
    color: ${Color.secondaryText};
  `,
  description: css`
    grid-area: description;
    
    position: relative;
  `,
  stars: css`
    position: absolute;
    right: 0px;
    bottom: 0px;
    
    display: flex;
    align-items: center;
    
    svg {
      width: 1rem;
      height: 1rem;
    }
  `
}

function Card({ title, thumbnail, categories, description, stars, className }: CardProps) {
  return (
    <div css={CardStyle.plane} className={className}>
      <img css={CardStyle.thumbnail} src={thumbnail} />
      <h3 css={CardStyle.title}> {title} </h3>
      <ul css={CardStyle.categories}>
        {
          categories.map((category, index, { length }) =>
            <li key={category}> {category}{index < length - 1 && ','} </li>
          )
        }
      </ul>
      <p css={CardStyle.description}>
        {description}
        {stars && <span css={CardStyle.stars}><GoStar/>{stars}</span>}
      </p>
    </div>
  )
}

interface CardListProps {
  children: ReactElement[]
  className?: string
}

const CardListStyle = {
  list: css`
    padding-left: 0px;
  `,
  item: css`
    padding: 2rem;
      
    border-bottom: 1px solid ${Color.secondaryText};
    
    list-style-type: none;
    
    :hover {
      background-color: ${Color.elementBackground};
    }
  `
}

function CardList({ children, className }: CardListProps) {
  return (
    <ol css={CardListStyle.list} className={className}>
      {
        Children.map(children, child => (
          <li css={CardListStyle.item} key={child.key}>{child}</li>
        ))
      }
    </ol>
  )
}

export const enum FilterTags {
  ALL,
  TS,
  React,
  OSS
}

export interface CardEntry {
  key: string
  title: string
  thumbnail: string
  categories: string[]
  description: string
  stars?: number
  filterTags: FilterTags[]
}

interface IndexProps {
  cardEntries: CardEntry[]
}

const IndexStyle = {
  page: css`
    height: 100vh;
    height: 100dvh;
  `,
  header: css`
    height: 10%;
    
    padding: 1rem 1.7rem;
  `,
  actionList: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    
    padding-left: 0px;
    
    list-style-type: none;
  `,
  actionItem: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  searchBox: css`
    background-color: ${Color.elementBackground};
    color: ${Color.primaryText};
    
    padding: 0.3rem 0.4rem;
    
    border-radius: 10px;
    border: 0px;
    
    width: 100%;
    
    :focus {
      outline: none;
      border: 2px solid ${Color.foreground};
    }
  `,
  searchButton: css`
    flex-shrink: 0;
    
    height: 1.5rem;
    width: 1.5rem;
    
    margin-left: 0.2rem;
  `,
  codeLink: css`
    font-size: 2rem;
    color: ${Color.primaryText};
  `,
  contentBox: css`
    overflow: scroll;
    
    height: 80%;
  `,
  filterList: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    list-style-type: none;
    
    padding: 0.7rem 1.5rem;
    
    @media (min-width: 800px) {
      gap: 1.5rem;
    }
  `,
  filterItem: css`
    flex-basis: 8rem;
    flex-grow: 1;
  
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
      
      padding: 0.5rem;
      
      width: 100%;
    }
  `,
  emptySearchResult: css`
    text-align: center;
    
    margin-top: 5rem;
    transform: translateY(-50%);
  `,
  footer: css`
    height: 10%;
    
    border-top: 1px solid ${Color.secondaryText};
    
    nav {
      height: 100%;
    }
  `,
  footerNavBar: css`
    height: 100%;
  
    display: flex;
    align-items: center;
    
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

function Index({ cardEntries }: IndexProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<FilterTags>(FilterTags.ALL)
  const [isFilterListVisible, setFilterListVisibility] = useState(true)
  const filterListRef = useRef<HTMLUListElement>(null)

  const cards: ReactElement[] = cardEntries
    .filter(({filterTags}) => filterTags.includes(filter))
    .filter(({ title, categories, description }) => {
      try {
        return title.match(searchQuery) ||
               categories.some(category => category.match(searchQuery)) ||
               description.match(searchQuery)
      } catch {
        return false
      }
    })
    .map(({ key, ...props }) => <Card key={key} {...props} />)

  useEffect(() => {
    if (filterListRef.current) {
      const observer = new IntersectionObserver(
        // 'entries' is actually a queue of entries thus it's okay to map setter sequentially.
        entries => entries.map(({ isIntersecting }) => setFilterListVisibility(isIntersecting)),
        { threshold: [0] }
      )

      observer.observe(filterListRef.current)

      return () => observer.disconnect()
    }
  })

  return (
    <div css={IndexStyle.page}>
      <header css={IndexStyle.header} style={isFilterListVisible ? {} : { borderBottom: `1px solid ${Color.secondaryText}`}}>
        <ul css={IndexStyle.actionList}>
          <li css={[IndexStyle.actionItem, css`flex-shrink: 0;`]}>
            <h1>곶감</h1>
          </li>
          <li css={[IndexStyle.actionItem, css`flex-grow: 1;`]}>
            <input onChange={({ target: { value } }) => setSearchQuery(value)} css={IndexStyle.searchBox} />
            <GoSearch css={IndexStyle.searchButton} />
          </li>
          <li css={[IndexStyle.actionItem, css`flex-shrink: 0;`]}>
            <a css={IndexStyle.codeLink} href='https://github.com/ENvironmentSet/portfolio'><FaGithub /></a>
          </li>
        </ul>
      </header>
      <main css={IndexStyle.contentBox}>
        <ul css={IndexStyle.filterList} ref={filterListRef}>
          <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.ALL)}>
            <button css={filter === FilterTags.ALL ? highlightedButton : plainButton}><FiAlignJustify css={css`height: 1.3rem; width: 1.3rem;`} />전체</button>
          </li>
          <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.TS)}>
            <button css={filter === FilterTags.TS ? highlightedButton : plainButton}><SiTypescript css={css`height: 1rem; width: 1rem;`} />TS</button>
          </li>
          <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.React)}>
            <button css={filter === FilterTags.React ? highlightedButton : plainButton}><FaReact css={css`height: 1.3rem; width: 1.3rem;`} />React</button>
          </li>
          <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.OSS)}>
            <button css={filter === FilterTags.OSS ? highlightedButton : plainButton}><DiOpensource css={css`height: 1.3rem; width: 1.3rem;`} />OSS</button>
          </li>
        </ul>
        {
          cards.length
            ? <CardList>{cards}</CardList>
            : <h2 css={IndexStyle.emptySearchResult}>'{searchQuery}' 검색 결과가 없습니다.</h2>
        }
      </main>
      <footer css={IndexStyle.footer}>
        <nav>
          <ul css={IndexStyle.footerNavBar}>
            <li css={IndexStyle.navItem}>
              <Link to='/' asChild>
                <button>
                  <IoDocumentSharp />
                  <span>포트폴리오</span>
                </button>
              </Link>
            </li>
            <li css={IndexStyle.navItem}>
              <Link to='/' asChild>
                <button>
                  <FaHeart />
                  <span>찜 목록</span>
                </button>
              </Link>
            </li>
            <li css={IndexStyle.navItem}>
              <Link to='/' asChild>
                <button>
                  <IoMdInformationCircle />
                  <span>곶감에 대해</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Index