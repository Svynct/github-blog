import { Container, Input, TitleContainer } from './styles'

interface SearchFormProps {
  postsLength: number
  handleFilterChange: (filter: string) => void
}

export function SearchForm({
  postsLength,
  handleFilterChange,
}: SearchFormProps) {
  return (
    <Container>
      <TitleContainer>
        <strong>Publicações</strong>
        <p>
          {postsLength === 1 ? '1 publicação' : `${postsLength} publicações`}
        </p>
      </TitleContainer>

      <Input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </Container>
  )
}
