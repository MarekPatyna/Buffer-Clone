import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 81.25rem;
  margin: 0 auto;
`

export const HelpContainer = styled.section`
  margin: 6.25rem 0 5rem 0;
`

export const SocialContainer = styled.section`
  display: flex;
  flex-flow: row-reverse;
  padding: 3.4375rem 2.1875rem;
  margin-bottom: 4.375rem;
  @media (max-width: 1000px) {
    flex-flow: column;
    align-items: center;
  }
  div {
    max-width: 50%;
    @media (max-width: 1000px) {
      margin: 0;
      max-width: 100%;
    }
    h1 {
      font-size: calc(1.375rem + (1vw - 0.234375rem) * 1.1268);
      font-weight: 800;
      line-height: 1.3;
      width: 80%;
      padding-bottom: 1.75rem;
      @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
      }
      @media (min-width: 1920px) {
        font-size: 3rem;
      }
    }
    h2 {
      font-size: 1.1875rem; 
      text-align: left;
      width: 100%;
      line-height: 1.7;
      word-spacing: 0.1875rem;
      @media (max-width: 1000px) {
        font-size: 1rem;
        text-align: center;
      }
    }
  }
`

export const Button = styled.div`
  padding-top: 1.75rem;
  @media(max-width: 1000px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const BtnHelp = styled(Link)`
  background-color: white;
  color: rgb(44, 75, 255);
  padding: 0.9375rem 1.5rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid rgb(44, 75, 255);
  width: 13.75rem;
  max-height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(214, 219, 252);
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`

export const SocialHero = styled.div`
  margin-right: 3.125rem;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    @media (max-width: 1000px) {
      margin-top: 3.125rem;
    }
  }
`

export const MarketingPartners = styled.div`
  p {
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    @media (max-width: 1000px) {
      flex-flow: column;
    }
    img {
      padding: 1.5625rem;
      height: 6.25rem;
      aspect-ratio: auto;
    }
  }
`