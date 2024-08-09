import { useState, ReactNode } from 'react'
import { Switch, Route, Redirect } from 'wouter'
import Index from './Index'
import Detail from './Detail.tsx'
import Likes, { persistLikes } from './Likes.tsx'
import About from './About.tsx'

import { Contents } from './contents/content.ts'
import index from './contents/index.ts'

import { css, Global } from '@emotion/react'
import Color from './colors.ts'

import './reset.css'
import './font.css'

const globalStyle = css`
  body {
    font-family: GmarketSans;
          
    color: ${Color.foreground};
    background-color: ${Color.background};
  }
  
  .rcs-inner-handle {
    background-color: ${Color.secondaryText};
    width: 0.4rem;
  }
        
  @media (max-width: 430px) {
    html {
      font-size: 14px;
    }
  }
        
  @media (max-width: 360px) {
    html {
      font-size: 12px;
    }
  }
`

interface PhoneCaseProps {
  children: ReactNode
}

const PhoneCaseStyle = {
  edge: css`
    height: 100vh;
    height: 100dvh;
    
    @media (min-width: 1024px) {
    
      width: 50vw;
    
      margin-left: auto;
      margin-right: auto;
      
      border: 15px solid ${Color.elementBackground};
      border-radius: 15px;
    }
  `
}

function PhoneCase({ children }: PhoneCaseProps) {
  return (
    <div css={PhoneCaseStyle.edge}>
      {children}
    </div>
  )
}

function App() {
  const [contents, setContents] = useState(index)

  return (
    <>
      <Contents.Provider value={{ contents, setContents: contents => { persistLikes(contents); setContents(contents) } }}>
        <Global
          styles={globalStyle}
        />
        <PhoneCase>
          <Switch>
            <Route path='/'> <Index cardEntries={index} /> </Route>
            <Route path='/items/:id'>
              {
                ({ id: targetId }) => {
                  const content = contents.find(({ id }) => id === targetId)

                  if (content) return <Detail {...content} />
                  else return <Redirect to='/' />
                }
              }
            </Route>
            <Route path='/likes'> <Likes /> </Route>
            <Route path='/about'> <About /> </Route>

            <Route> <Redirect to='/' /> </Route>
          </Switch>
        </PhoneCase>
      </Contents.Provider>
    </>
  )
}

export default App
