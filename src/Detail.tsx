import { css } from '@emotion/react'

import profilePicture from './assets/profile.jpeg'

import { Color } from './colors.ts'

interface ProfileProps {
  className?: string
}

const ProfileStyle = {
  plane: css`
    display: flex;
    align-items: center;
    
    padding-bottom: 1rem;
    
    border-bottom: 1px solid ${Color.secondaryText};
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
    
    z-index: 0;
  `,
  bar: css`
    position: absolute;
    display: block;
    
    width: 82.15%;
    height: 0px;
    
    border: 2px solid ${Color.highlight};
    border-radius: 45px;
    
    z-index: 1;
  `,
  info: css`
    color: ${Color.secondaryText};
    font-weight: 300;
    font-size: 0.6rem;
    
    margin-top: 0.1rem;
    
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