import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { Link } from 'react-router-dom'

import { Container, TitleContainer } from './styles'

interface PostProps {
  url: string
  title: string
  body: string
  createdAt: Date
}

export function Post({ url, title, body, createdAt }: PostProps) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <Container>
      <Link to={`/post?url=${url}`}>
        <TitleContainer>
          <strong>{title}</strong>
          <span>{formattedDate}</span>
        </TitleContainer>
        <ReactMarkdown>{body}</ReactMarkdown>
      </Link>
    </Container>
  )
}
