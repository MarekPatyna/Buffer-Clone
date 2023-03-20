import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 8.125rem;
  hgroup {
    max-width: 81.25rem;
    text-align: center;
    margin: 0 auto;
    h1 {
      font-size: calc(1.375rem + (1vw - 0.234375rem) * 1.1268);
      font-weight: 700;
      @media (min-width: 1920px) {
        font-size: 2.43419375rem;
      }
    }
    p {
      font-size: 1.1875rem;
      width: 40%;
      line-height: 1.7;
      word-spacing: 0.0625rem;
      margin: 0 auto;
      padding-top: 1.5625rem;
      @media (max-width: 1000px) {
        width: 80%;
        font-size: 1rem;
      }
    }
  }
`

export const PhasesImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 115rem;
    @media(max-width: 1000px){
      transform: scale(1.6);
      margin-top: 6.25rem;
    }
  }
`