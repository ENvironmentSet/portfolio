import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { Global, css } from '@emotion/react'
import { Color } from './colors.ts'

import './reset.css'
import './font.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global
      styles={css`
        body {
          font-family: GmarketSans;
          
          color: ${Color.foreground};
          background-color: ${Color.background};
        }
      `}
    />
    <App />
  </StrictMode>,
)
