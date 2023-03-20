import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(44, 75, 255);
  padding: 7.5rem 0;
  article {
    margin: 0 auto;
    max-width: 37.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    h1 {
      font-size: calc(1.375rem + (1vw - 0.234375rem) * 1.1268);
      color: white;
      font-weight: 800;
      text-align: center;
      margin-bottom: 2.5rem;
      @media (min-width: 1920px) {
        font-size: 2.43419375rem;
      }
    }
    button {
      background-color: rgb(233, 114, 132);
      color: white;
      padding: 1.5625rem 2.5rem;
      border-radius: 0.375rem;
      cursor: pointer;
      &:hover {
        background-color: rgb(229, 87, 108);
      }
    }
  }
`