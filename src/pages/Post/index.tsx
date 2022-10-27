import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { PostContent } from '../../components/PostContent'
import { PostInfo } from '../../components/PostInfo'
import { axiosClient } from '../../lib/axios'

interface IPost {
  title: string
  createdAt: Date
  body: string
  comments: number
  login: string
  url: string
}

export function Post() {
  const [currentPost, setCurrentPost] = useState<IPost>({} as IPost)
  const [searchParams] = useSearchParams()

  const { url } = Object.fromEntries(searchParams)

  const fetchPost = useCallback(async () => {
    const response = await axiosClient.get(url)

    const post = {
      title: response.data.title,
      createdAt: new Date(response.data.created_at),
      body: response.data.body,
      comments: response.data.comments,
      login: response.data.user.login,
      url: response.data.html_url,
    }

    setCurrentPost(post)
  }, [url])

  useEffect(() => {
    if (!currentPost.title) {
      fetchPost()
    }
  }, [currentPost, fetchPost])

  return (
    <>
      {currentPost.title && (
        <>
          <PostInfo
            url={currentPost.url}
            title={currentPost.title}
            comments={currentPost.comments}
            createdAt={currentPost.createdAt}
            login={currentPost.login}
          />
          <PostContent body={currentPost.body} />
        </>
      )}
    </>
  )
}
