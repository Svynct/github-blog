import { createContext, ReactNode, useState } from 'react'

interface IPost {
  id: number
  url: string
  title: string
  body: string
  createdAt: Date
}

interface IUser {
  login: string
  name: string
  bio: string
  company: string
  followers: number
  avatar_url: string
}

interface IUserContext {
  user: IUser
  posts: IPost[]
  mountUser: (user: IUser) => void
  mountPosts: (posts: IPost[]) => void
}

export const UserContext = createContext({} as IUserContext)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [posts, setPosts] = useState<IPost[]>([])

  function mountUser(user: IUser) {
    setUser(user)
  }

  function mountPosts(posts: IPost[]) {
    setPosts(posts)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        posts,
        mountUser,
        mountPosts,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
