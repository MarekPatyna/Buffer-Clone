import styled from 'styled-components'
import { Link } from "react-router-dom";


export const Container = styled.div`
  max-width: 65.625rem;
  margin: 0 auto;
`

export const PathContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  gap: 7rem;
  margin-top: 6.25rem;
  padding: 3.4375rem 2.1875rem;
  &:nth-of-type(2) {
    flex-flow: row-reverse;
  }
  @media(max-width: 1000px){
    flex-flow: column !important;
    text-align: center;
  }
`

export const SocialStarted = styled.div`
  padding-top: 1.5625rem;
  h1 {
    color: rgb(44, 75, 255);
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 1.5625rem;
    
  }
  h2 {
    font-size: calc(1.375rem + (1vw - 0.234375rem) * 1.1268);
    font-weight: 800;
    line-height: 1.3;
    padding-bottom: 1.75rem;
    @media (min-width: 1920px) {
      font-size: 3rem;
    }
  }
  p {
    font-size: 1.1875rem;
    line-height: 1.3;
    @media(max-width: 1000px){
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

export const RegButton = styled(Link)`
  width: 11.229375rem;
  background-color: rgb(44, 75, 255);
  color: white;
  padding: 0.9375rem 1.5rem;
  border-radius: 0.375rem;
  text-align: center;
`

export const LearnButton = styled(Link)`
  background-color: white;
  color: rgb(44, 75, 255);
  padding: 0.9375rem 1.5rem;
  border-radius: 0.375rem;
  border: 0.0625rem solid rgb(44, 75, 255);
  width: 9.354375rem;
  max-height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  &:hover {
    background-color: rgb(214, 219, 252);
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`

export const SocialHero = styled.div`
  img {
    @media(max-width: 1350px){
      max-width: 90%;
    }
  }
`