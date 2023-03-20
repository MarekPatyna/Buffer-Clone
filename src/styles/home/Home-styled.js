import styled, { keyframes } from 'styled-components'
import { Link } from "react-router-dom";
import { BsPlayCircle } from 'react-icons/bs'
import { IoMdClose } from "react-icons/io";

const SlideTop = keyframes`
  from { transform: translateY(100px); }
  to { transform: translateY(0); }
`


export const Container = styled.div`
  max-width: 81.25rem;
  margin: 0 auto;
  @media(max-width: 1000px){
    text-align: center;
  }
`

export const HomeContainer = styled.section`
  display: flex;
  flex-flow: row;
  padding: 3.4375rem 2.1875rem;
  @media(max-width: 1000px){
    flex-flow: column;
    padding-top: 3.125rem;
    
  }
`

export const SocialStarted = styled.div`
  padding-top: 4.375rem;
  @media(max-width: 1000px){
    padding-top: 0;
  }
  h1 {
    font-size: calc(1.375rem + (1vw - 0.234375rem) * 1.6901);
    font-weight: 800;
    line-height: 1.3;
    width: 75%;
    padding-bottom: 1.75rem;
    @media (min-width: 1920px) {
      font-size: 3rem;
    }
    @media(max-width: 1000px){
      width: 100%;
    }
  }
  h2 {
    font-size: 1.1875rem;
    width: 73%;
    line-height: 1.7;
    word-spacing: 0.1875rem;
    @media(max-width: 1000px){
      width: 90%;
      margin: 0 auto;
      word-spacing: 0;
      font-size: 1rem;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 1rem;
  padding-top: 1.75rem;
  @media(max-width: 1000px){
    flex-flow: column;
  }
`

export const WatchButton = styled.button`
  background-color: white;
  color: rgb(44, 75, 255);
  padding: 0.9375rem 1.5rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid rgb(44, 75, 255);
  width: 11.229375rem;
  max-height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(214, 219, 252);
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`

export const RegButton = styled(Link)`
  width: 11.229375rem;
  background-color: rgb(44, 75, 255);
  color: white;
  padding: 0.9375rem 1.5rem;
  border-radius: 0.375rem;
  text-align: center;
`

export const PlayIcon = styled(BsPlayCircle)`
  font-size: 1.5625rem;
  background-color: white;
  border-radius: 0.75rem;
`

export const PopupContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgba(41, 62, 106, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PopupInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 80vw;
  padding: 3.125rem;
  -webkit-animation: ${SlideTop} 0.65s both;
  animation: ${SlideTop} 0.65s both;
  @media(max-width: 700px){
    max-width: 90vh;
  }
`

export const CloseBtn = styled(IoMdClose)`
  position: absolute;
  top: 1.4375rem;
  right: -0.3125rem;
  padding: 1.25rem;
  z-index: 999;
  font-size: 4.375rem;
  color: white;
`