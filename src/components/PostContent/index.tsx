import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Container } from './styles'

interface PostContentProps {
  body: string
}

export function PostContent({ body }: PostContentProps) {
  console.log(body)

  return (
    <Container>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </Container>
  )
}
