import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  margin-top: -64px;
  color: ${(props) => props.theme.baseText};
  line-height: 160%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    margin-bottom: 16px;
    line-height: 160%;
  }

  li {
    margin-left: 18px;
  }

  h2 {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.baseText};
  }

  h4 {
    font-size: 1rem;
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  img {
    max-width: 800px;
  }

  p {
    code {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px;
      gap: 8px;

      background: ${(props) => props.theme.basePost};
      border-radius: 2px;
    }
  }
`
