import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 20px;

  background: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -90px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border 0.2s;
    line-height: 160%;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  strong {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
  }
`

export const Info = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.baseSpan};
    line-height: 160%;
    gap: 8px;
  }
`
