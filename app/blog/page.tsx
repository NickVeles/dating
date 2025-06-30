import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import TitleContainer from '@/components/utilities/title-container'
import { Heart } from 'phosphor-react'

const postsDirectory = path.join(process.cwd(), 'posts')

type Post = {
  slug: string
  title: string
  date: string
}

export default function BlogIndex() {
  const filenames = fs.readdirSync(postsDirectory)

  const posts: Post[] = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title as string,
      date: data.date as string,
    }
  })

  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer>Dating Profile</TitleContainer>
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
