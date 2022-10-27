import styled from 'styled-components'

export const Background = styled.nav`
  height: 296px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: ${(props) => props.theme.baseProfile};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0px;
    gap: 20px;

    width: 148px;
    height: 98px;

    strong {
      font-family: 'Coda', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      text-transform: uppercase;

      color: #3294f8;
    }
  }
`
