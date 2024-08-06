import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { css } from '@emotion/react'

interface ModalProps {
  children: ReactNode
  close: () => void
  className?: string
}

const ModalStyle = {
  background: css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: opacity(50%) brightness(30%);
  `
}

const modalRoot = document.getElementById('modal')!

function Modal({ children, close, className }: ModalProps) {
  return createPortal(
    <div
      // We can't use Event#eventPhase since React incorrectly implemented it in SyntheticEvents: https://github.com/facebook/react/issues/9783
      onClick={({ target, currentTarget }) => target === currentTarget && close()}
      css={ModalStyle.background}
      className={className}
    >
      {children}
    </div>,
    modalRoot
  )
}

export default Modal