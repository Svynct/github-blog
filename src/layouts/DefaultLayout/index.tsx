import { Outlet } from 'react-router-dom'

import { Container } from './styles'

export default function DefaultLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}
