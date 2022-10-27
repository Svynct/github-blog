import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  gap: 32px;
  width: 100%;

  background: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -90px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  p {
    color: ${(props) => props.theme.baseText};
  }
`

export const Avatar = styled.img`
  border-radius: 8px;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;

  div {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    gap: 8px;
    border-bottom: 1px solid transparent;
    transition: border 0.2s;

    a {
      font-size: 0.75rem;
      line-height: 160%;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }
  }

  div:hover {
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  strong {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 24px;
  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.baseSubtitle};
    line-height: 160%;
    gap: 8px;

    svg {
      color: ${(props) => props.theme.baseLabel};
    }
  }
`
