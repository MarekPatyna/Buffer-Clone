import styled from 'styled-components'

export const Container = styled.section` 
  max-width: 75.25rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-flow: row;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
  div {
    width: calc(25% - 3.75rem);
    padding: 40px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
      width: 30%;
      padding: 1.5625rem 0.9375rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`