import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {RiArrowRightSLine} from "react-icons/ri";

export const Container = styled.nav`
  margin: 0 auto;
  max-width: 83.75rem;
  z-index: 999;
  position: sticky;
  top: ${props => props.visible ? '0' : '-10rem'};
  background-color: rgb(255, 255, 255);
  text-transform: capitalize;
  transition: top 0.6s;
  border-radius: 0 0 0.625rem 0.625rem;
`

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.875rem 0.9375rem;
`

export const BufferLogo = styled.div`
  @media(max-width: 350px){
    max-width: 5.625rem;
  }
  img {
    @media(max-width: 700px){
      max-width: 80%;
    }
  }
`

export const MenuLinks = styled.ul`
  cursor: pointer;
  @media (max-width: 1000px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    margin: 0 1.5rem;
    position: relative;

    span {
      &:hover{
        transition: all 200ms ease-in-out 0s;
        color: rgb(44, 75, 255);

      }
      &::after{
        transform: scaleX(0);
      }
      &:hover::after{
        transform: scaleX(1);
      }
      &::after {
        content: '';
        position: absolute;
        background-color: rgb(44, 75, 255);
        width: 0.625rem;
        height: 0.1875rem;
        bottom: -0.75rem;
        left: 45%;
        transition: all 200ms ease-in-out 0s;
      }
    }
  }
`

export const DDContent = styled.section`
  position: absolute;
  background-color: transparent;
  z-index: 999;
  padding: 1.875rem 1rem 1rem;
  left: -2.5rem;
  top: 1.25rem;

`

export const DDInside = styled.ul`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  box-shadow: rgb(35 31 32 / 20%) 0 0 1.25rem;
  padding: 1rem;
  width: 18.75rem;
  border-radius: 0.5rem;

  li {
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    gap: 0.875rem;
    padding: 1rem;
    margin: 0;
    transition-duration: .35s;
    &:hover {
      background-color: rgb(245, 245, 245);
    }
    &:nth-child(2) {
      gap: 0.21875rem;
      img {
        position: relative;
        left: -0.3125rem;
      }
    }
    &:last-child {
      gap: 0.5rem;
    }
    h1 {
      font-size: 1rem;
      font-weight: 700;
      p {
        font-size: 0.8125rem;
        font-weight: 200;
        margin-top: 0.625rem;
        line-height: 1.25rem;
        color: rgb(99, 99, 99);
      }
    }
  }
`

export const BufferStarted = styled.div`
  display: flex;
  gap: 1em;
  -webkit-box-align: center;
  align-items: center;
`

export const Login = styled(Link)`
  color: rgb(44, 75, 255);
  border-bottom: 0.0625rem solid transparent;
  &:hover {
    border-bottom: 0.0625rem solid rgb(44, 75, 255);
  }
  @media(max-width: 700px){
    display: none;
  }
`

export const RegButton = styled(Link)`
  background-color: rgb(44, 75, 255);
  color: white;
  padding: 0.9375rem 1.5rem;
  border-radius: 0.375rem;
  text-align: center;
  @media(max-width: 700px){
    font-size: 0.9375rem;
    padding: 0.625rem 0.875rem;
  }
  @media(max-width: 350px){
    font-size: 0.6875rem;
    padding: 0.625rem 0.3125rem;
  }
`

export const HamburgerIcon = styled.div`
  display: none;
  @media(max-width: 1000px){
    display: block;
  }
`

export const BurgerContainer = styled.div`
  width: 2rem;
  height: 1.4rem;
  top: 0.9375rem;
  right: 0.9375rem;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  div {
    width: 1.78rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 0.625rem;
    transform-origin: 0.0625rem;
    transition: all 0.088s linear;
    &:nth-child(1) {
      transform: ${props => props.showMenu ? 'rotate(45deg)' : ''};
      background-color: ${props => props.showMenu ? 'white' : ''};
    }
    &:nth-child(2) {
      opacity: ${props => props.showMenu ? 0 : 1};

    }
    &:nth-child(3) {
      transform: ${props => props.showMenu ? 'rotate(-45deg)' : ''};
      background-color: ${props => props.showMenu ? 'white' : ''};
    }
  }
`

export const Hamburger = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transform: ${props => props.showMenu ? "translateX(0)" : "translateX(100%)"};
  background-color: rgb(44, 75, 255);
  transition: all .15s ease-in 0s;
  @media (min-width: 1001px) {
    display: none;
  }
`

export const BufferLogoMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 1.875rem 0.9375rem;
  img {
    filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(206deg) brightness(107%) contrast(101%);
  }
`

export const MobileList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 0 auto;
  li {
    font-size: 1.5rem;
    color: white;
    font-weight: 700;

    &:not(:first-child){
      margin-top: 1.25rem;

    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2.5rem;
    }
  }
`

export const ArrowRotate = styled(RiArrowRightSLine)`
  font-size: 2.5rem;
  font-weight: 400;
  transition: transform 125ms ease-out 0s;
  transform: ${props => props.rotate ? "rotate(90deg)" : ""}
`

export const ToolsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 0.75rem;

  li {
    font-size: 1rem;
    &:last-child {
      border-bottom: 0.0625rem solid white;
      padding-bottom: 0.9375rem;
      width: 18.75rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const RegButtonMobile = styled(Link)`
  background-color: rgb(233, 114, 132);
  color: white;
  padding: 0.9375rem 1.5rem;
  border-radius: 0.375rem;
  text-align: center;
  margin-top: 1.875rem;
`

export const LoginMobile = styled(Link)`
  margin-top: 1.875rem;
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
`