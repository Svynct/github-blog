/* eslint-disable camelcase */
import { useCallback, useContext, useEffect, useState } from 'react'

import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { UserContext } from '../../contexts/UserContext'
import { githubApi } from '../../lib/axios'
import { PostList } from './styles'

export function Home() {
  const { user, posts, mountUser, mountPosts } = useContext(UserContext)

  const [filter, setFilter] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLocaleLowerCase()),
  )

  const fetchUser = useCallback(async () => {
    const response = await githubApi.get('users/svynct')

    const { login, name, company, avatar_url, followers, bio } = response.data

    mountUser({ login, name, company, avatar_url, followers, bio })
  }, [mountUser])

  const fetchPosts = useCallback(async () => {
    const response = await githubApi.get(
      'search/issues?q=repo:svynct/github-blog',
    )

    const { items } = response.data

    const posts = items.map((item: any) => {
      let body = item.body

      if (body.includes('\r\n')) {
        body = body.split('\r\n')[0]
      }

      return {
        id: item.id,
        title: item.title,
        body,
        url: item.url,
        createdAt: item.created_at,
      }
    })

    mountPosts(posts)
  }, [mountPosts])

  useEffect(() => {
    if (!user.login) {
      fetchUser()
    }

    if (!posts.length) {
      fetchPosts()
    }
  }, [user, posts, fetchUser, fetchPosts])

  const handleFilterChange = useCallback((filter: string) => {
    setFilter(filter)
  }, [])

  return (
    <>
      <Profile />
      <SearchForm
        postsLength={filteredPosts.length}
        handleFilterChange={handleFilterChange}
      />

      <PostList>
        {filteredPosts.map((post) => (
          <Post
            key={post.id}
            url={post.url}
            title={post.title}
            body={post.body}
            createdAt={post.createdAt}
          />
        ))}
      </PostList>
    </>
  )
}
