import { useState } from 'react'
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

function App() {
  const [contents, setContents] = useState(index)

  return (
    <>
      <Contents.Provider value={{ contents, setContents: contents => { persistLikes(contents); setContents(contents) } }}>
        <Global
          styles={globalStyle}
        />
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
      </Contents.Provider>
    </>
  )
}

export default App
