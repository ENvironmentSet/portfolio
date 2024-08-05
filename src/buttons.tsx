import { css } from '@emotion/react'

import Color from './colors.ts'

export const plainButton = css`
  background-color: ${Color.elementBackground};
  color: ${Color.foreground};
  
  border-radius: 10px;
  border-color: ${Color.elementBackground};
  border-style: solid;
`

export const highlightedButton = css`
  ${plainButton};
  
  background-color: ${Color.highlight};
  color: ${Color.primaryText};
`