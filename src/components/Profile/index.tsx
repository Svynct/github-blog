import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Avatar, Container, Content, ProfileInfo, ProfileTitle } from './styles'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Profile() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Avatar src={user.avatar_url} width="148px" height="148px" alt="" />
      <Content>
        <ProfileTitle>
          <strong>{user.name}</strong>
          <div>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </ProfileTitle>

        <p>{user.bio}</p>

        <ProfileInfo>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{user.login}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{user.company}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{user.followers} seguidores</p>
          </div>
        </ProfileInfo>
      </Content>
    </Container>
  )
}
