import { Background } from './styles'

import bgLeft from '../../assets/bg-left.svg'
import bgRight from '../../assets/bg-right.svg'
import logo from '../../assets/logo.svg'

export function Cover() {
  return (
    <Background>
      <img src={bgLeft} alt="" />
      <div>
        <img src={logo} alt="" />
        <strong>Github Blog</strong>
      </div>
      <img src={bgRight} alt="" />
    </Background>
  )
}
