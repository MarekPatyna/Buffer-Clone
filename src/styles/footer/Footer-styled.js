import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";


export const Container = styled.div`
  max-width: 81.25rem;
  margin: 0 auto;
`

export const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  margin: 6.25rem 2.1875rem;
  gap: 10rem;
  @media(max-width: 950px){
    flex-flow: column;
    gap: 4rem;
  }
`

export const FooterApps = styled.section`
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    cursor: pointer;
    @media (max-width: 950px) {
      text-align: center;
    }
  }
  h2 {
    font-weight: 800;
    font-size: 0.9375rem;
    margin-top: 1.25rem;
    @media(max-width: 950px){
      text-align: center;
    }
  }
`

export const FooterIcons = styled.div`
  display: flex;
  flex-flow: row;
  gap: 1rem;
  font-size: 1.25rem;
  margin-top: 5rem;
  cursor: pointer;
  @media(max-width: 950px){
    margin-top: 1.875rem;
    justify-content: center;
  }
`

export const FooterButtons = styled.div`
  display: flex;
  flex-flow: row;
  gap: 0.625rem;
  margin-top: 0.625rem;
  @media(max-width: 950px){
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
`

export const MobileStore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: 0.0625rem solid rgb(44, 75, 255);
  padding: 0.125rem 0.5rem;
  border-radius: 0.75rem;
  font-size: 0.625rem;
  width: 6.25rem;
  color: rgb(44, 75, 255);
  font-weight: bold;
  &:hover {
    background-color: rgb(214, 219, 252);
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`

export const CopyRight = styled.div`
  font-size: 0.625rem;
  margin-top: 1.25rem;
  span {
    margin: 0 0.3125rem;
  }
`

export const FooterList = styled.ul`
  display: flex;
  gap: 3.5rem;
  @media(max-width: 950px){
    flex-flow: column;
  }
  li {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    @media(max-width: 950px){
      text-align: center;
    }
  }
  p {
    font-weight: 800;
    font-size: 1.25rem;
  }
`

export const FooterListLink = styled(Link)`
  width: 85%;
  &:hover{
    color: rgb(44, 75, 255);
  }
  @media(max-width: 950px){
    width: 100%;
  }
`

export const AppleIcon = styled(FaApple)`
  font-size: 1.375rem;
`

export const GoogleIcon = styled(FaGooglePlay)`
  font-size: 0.9375rem;
`
