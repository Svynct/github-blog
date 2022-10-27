import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 160%;

  strong {
    font-size: 1.125rem;
    color: ${(props) => props.theme.baseSubtitle};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseSpan};
  }
`

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.baseInput};
  color: ${(props) => props.theme.baseText};
  border: 1px solid ${(props) => props.theme.baseBorder};
  border-radius: 6px;
  line-height: 160%;

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }
`
