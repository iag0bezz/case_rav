import { ReactNode, useCallback, useEffect, useRef } from "react";

import * as S from './styles'

type IProps = {
  width?: number;
  height?: number;
  background?: string;

  show: boolean;
  setShow(visible: boolean): void;
  children: ReactNode;
}

export default function Modal({ 
  height = 500,
  width = 800,
  background = '#fff',

  show, 
  setShow, 
  children 
}: IProps) {
  const modalRef = useRef(null);

  const handleClose = (e: any) => {
    if (modalRef.current === e.target) {
      setShow(false)
    }
  }

  const handleKeyPress = useCallback(e => {
    if (e.key === 'Escape' && show) {
      setShow(false);
    }
  }, [setShow, show])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <>
      {show ? (
        <S.Container 
          onClick={handleClose} 
          ref={modalRef}
        >
          <S.Wrapper width={width} height={height} background={background}>
            {children}
          </S.Wrapper>
        </S.Container>
      ) : null}
    </>
  )
}