import { Children, ReactElement, useState, useEffect, useRef } from 'react'

import { Link, useLocation } from 'wouter'
import { CustomScroll } from 'react-custom-scroll'

import { css } from '@emotion/react'

import Color from './colors.ts'
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
    position: relative;
  
    height: 12rem;
  
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 4fr;
    grid-template-areas:
      'thumbnail title'
      'thumbnail categories'
      'thumbnail description';
    grid-column-gap: 1.5rem;
    
    @media (min-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: 15rem auto auto 1fr;
      grid-template-areas:
        'thumbnail'
        'title'
        'categories'
        'description';
      
      padding: 0 1.5rem 1.5rem;
      
      height: 100%;
    }
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
    
    @media (min-width: 1024px) {
      margin-top: 0.6rem;
    }
  `,
  categories: css`
    grid-area: categories;
    
    padding-left: 0px;
    
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.3rem;
    
    list-style-type: none;
    
    color: ${Color.secondaryText};
  `,
  description: css`
    grid-area: description;
    
    padding-right: 1rem;
    
    @media (min-width: 1024px) {
      margin-top: 1rem;
    }
  `,
  stars: css`
    position: absolute;
    right: 0.5rem;
    bottom: 0px;
    
    display: flex;
    align-items: center;
    
    svg {
      width: 1rem;
      height: 1rem;
    }
    
    @media (min-width: 1024px) {
      right: 1.5rem;
    }
  `
}

export function Card({ title, thumbnail, categories, description, stars, className, onClick }: CardProps) {
  return (
    <div css={CardStyle.plane} className={className} onClick={onClick}>
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
    padding: 0px 1.3rem;
    
    display: grid;
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
  item: css`
    padding: 1.3rem 0px;
      
    border-bottom: 1px solid ${Color.secondaryText};
    
    list-style-type: none;
    
    :hover {
      background-color: ${Color.elementBackground};
    }
    
    @media (min-width: 1024px) {
      padding-bottom: 0.8rem;
    }
  `
}

export function CardList({ children, className }: CardListProps) {
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

interface CardEntry {
  id: string
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
    height: 100%;
    
    display: flex;
    flex-direction: column;
  `,
  header: css`
    height: 10%;
    
    padding: 1rem 1.7rem;
    
    @media (min-width: 1024px) {
      height: auto;
    
      padding: 1rem 25%;
    }
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
      border: 2px solid ${Color.secondaryText};
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
    height: 80%;
    
    @media (min-width: 1024px) {
      height: auto;
      flex-grow: 1;
    }
  `,
  scrollbarInnerBox: css`
    @media (min-width: 1024px) {
      padding: 0 12%;
    }
  `,
  filterList: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    list-style-type: none;
    
    padding: 0.7rem 1.5rem;
       
    @media (min-width: 1024px) {
      padding: 0 25% 0.7rem;
    }
    
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
        
    @media (min-width: 1024px) {
      position: fixed;
      top: 5.5rem;
      
      padding: 1.5rem 1.5rem;
      
      height: auto;
      
      border: none;
      border-right: 2px solid ${Color.secondaryText};
    }
  `,
  footerNavBar: css`
    height: 100%;
  
    display: flex;
    align-items: center;
    
    list-style-type: none;
    
    padding-left: 0px;
    
    @media (min-width: 1024px) {
      flex-direction: column;
      gap: 1.5rem;
    }
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
  const [, navigate] = useLocation()

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
    .map(({ id, ...props }) => <Card key={id} {...props} onClick={() => navigate(`/items/${id}`)} />)

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
  }, [])

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
        <CustomScroll heightRelativeToParent="100%">
          <div css={IndexStyle.scrollbarInnerBox}>
            <ul css={IndexStyle.filterList} ref={filterListRef}>
              <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.ALL)}>
                <button css={filter === FilterTags.ALL ? highlightedButton : plainButton}><FiAlignJustify css={css`height: 1.3rem; width: 1.3rem;`} />전체</button>
              </li>
              <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.TS)}>
                <button css={filter === FilterTags.TS ? highlightedButton : plainButton}><SiTypescript css={css`height: 1rem; width: 1rem;`} />TS</button>
              </li>
              <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.React)}>
                <button css={filter === FilterTags.React ? highlightedButton : plainButton}><FaReact css={css`height: 1rem; width: 1rem; flex-shrink: 0;`} />React</button>
              </li>
              <li css={IndexStyle.filterItem} onClick={() => setFilter(FilterTags.OSS)}>
                <button css={filter === FilterTags.OSS ? highlightedButton : plainButton}><DiOpensource css={css`height: 1.3rem; width: 1.3rem; flex-shrink: 0;`} />OSS</button>
              </li>
            </ul>
            {
              cards.length
                ? <CardList>{cards}</CardList>
                : <h2 css={IndexStyle.emptySearchResult}>'{searchQuery}' 검색 결과가 없습니다.</h2>
            }
          </div>
        </CustomScroll>
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
              <Link to='/likes' asChild>
                <button>
                  <FaHeart />
                  <span>찜 목록</span>
                </button>
              </Link>
            </li>
            <li css={IndexStyle.navItem}>
              <Link to='/about' asChild>
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