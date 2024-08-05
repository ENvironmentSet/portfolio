import { Switch, Route, Redirect } from 'wouter'
import Index from './Index'

import index from './contents/index.ts'

import { css, Global } from '@emotion/react'
import { Color } from './colors.ts'

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
  return (
    <>
      <Global
        styles={globalStyle}
      />
      <Switch>
        <Route path='/'> <Index cardEntries={index} /> </Route>

        <Route> <Redirect to='/' /> </Route>
      </Switch>
    </>
  )
}

export default App
