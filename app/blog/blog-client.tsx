'use client'

import Link from 'next/link'
import { Heart } from 'phosphor-react'
import TitleContainer from '@/components/utilities/title-container'

type Post = {
  slug: string
  title: string
  date: string
}

interface BlogClientProps {
  posts: Post[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={Heart}>Dating Guide</TitleContainer>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              {title} - {date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}