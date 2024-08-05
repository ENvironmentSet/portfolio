import { Switch, Route, Redirect } from 'wouter'
import Index from './Index'

import cardEntries from './contents/card-entries.ts'

import { css, Global } from '@emotion/react'
import { Color } from './colors.ts'

import './reset.css'
import './font.css'

function App() {
  return (
    <>
      <Global
        styles={css`
        body {
          font-family: GmarketSans;
          
          color: ${Color.foreground};
          background-color: ${Color.background};
        }
        
        @media (max-width: 640px) {
          html {
            font-size: 12px;
          }
        }
      `}
      />
      <Switch>
        <Route path='/'> <Index cardEntries={cardEntries} /> </Route>

        <Route> <Redirect to='/' /> </Route>
      </Switch>
    </>
  )
}

export default App
