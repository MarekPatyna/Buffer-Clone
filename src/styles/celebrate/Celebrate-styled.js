import styled, { keyframes } from "styled-components";

const animate = keyframes`
  from { transform: translateX(0) } 
  to { transform: translateX(-100%) }
`
export const Container = styled.section`
  padding-bottom: 5rem;
  border-bottom: 0.0625rem solid rgb(225, 225, 225);
  hgroup {
    text-align: center;
    margin-bottom: 3.125rem;
    padding: 3.4375rem 2.1875rem;
    h1 {
      color: rgb(44, 75, 255);
      font-weight: 700;
      text-transform: uppercase;
      padding-bottom: 1.5625rem;
    }
    p {
      font-size: calc(1.375rem + (1vw - 0.234375rem) * 1.1268);
      font-weight: 800;
      line-height: 1.3;
      max-width: 31.25rem;
      margin-left: auto;
      margin-right: auto;
      @media (min-width: 1920px) {
        font-size: 3rem;
      }
    }
  }
`

export const AnimatedContainer = styled.div`
  display: flex;
  .box {
    margin: 0 auto;
    display: flex;
    flex-flow: row;
    animation: ${animate}  20s linear 0s infinite normal none running;
    .item {
      display: flex;
      &:first-child {
        position: absolute;
        right: -100%;
        top: 0;
      }
    }
    &:hover {
      animation-play-state: paused;
    }
  }
`

export const About = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  max-width: 68.75rem;
  margin: 0 auto;
  gap: 6rem;
  text-align: center;
  @media (max-width: 1000px) {
    flex-flow: column;
    gap: 3rem;
  }
  li {
    margin-top: 3.125rem;
    span {
      font-size: calc(2rem + (1vw - 0.296875rem) * 1.1268);
      color: rgb(44, 75, 255);
      font-weight: 800;
      @media (min-width: 1920px) {
        font-size: 2.98876875rem;
      }
    }
    p {
      font-size: 1.25rem;
      @media(max-width: 1350px){
        font-size: 1rem;
      }
    }
  }
`

export const MapContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: relative;
  width: 21.875rem;
  height: 18.75rem;
  padding: 3.125rem;
  margin: 0 1.25rem;
  background-color: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 1.875rem -0.0625rem;
  text-align: center;
`

export const Avatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3.4375rem;
  img {
    border-radius: 50%;
    width: 80%;
  }
`

export const MapAbout = styled.div`
  font-size: 0.875rem;
  margin-bottom: 2.1875rem;
  margin-top: 0.9375rem;
`

export const Logo = styled.div`
  height: 0;
  flex: 1 1;
  img {
    width: 50%;
    height: 50%;
  }
  p {
    font-size: 0.875rem;
    font-weight: 700;
    margin-top: 1.5625rem;
  }
`