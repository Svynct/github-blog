import styled from 'styled-components'

export const Container = styled.div`
  a {
    text-decoration: none;

    display: flex;
    flex-direction: column;
    gap: 20px;
    line-height: 160%;
    padding: 32px;
    background: ${(props) => props.theme.basePost};
    border-radius: 10px;

    p {
      color: ${(props) => props.theme.baseText};
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseTitle};
    width: 252px;
  }

  span {
    font-size: 0.875rem;
    text-align: right;
    color: ${(props) => props.theme.baseSpan};
    width: 40%;
  }
`
