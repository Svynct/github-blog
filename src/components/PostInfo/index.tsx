import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { Container, Content, Info, TitleContainer } from './styles'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostInfoProps {
  url: string
  title: string
  login: string
  createdAt: Date
  comments: number
}

export function PostInfo({
  url,
  title,
  login,
  createdAt,
  comments,
}: PostInfoProps) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <Container>
      <TitleContainer>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a href={url} target="_blank" rel="noreferrer">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </TitleContainer>

      <Content>
        <strong>{title}</strong>

        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{login}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>{formattedDate}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>{comments} comentários</p>
          </div>
        </Info>
      </Content>
    </Container>
  )
}
