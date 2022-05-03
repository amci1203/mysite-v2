import fs from 'fs/promises'
import { POSTS_DIR } from '@lib/constants'

const BlogPost = ({ content, ...props }) => {
  return null
}

export const getStaticPaths = async () => {
  const posts = await fs.readdir(POSTS_DIR)
  console.log(posts)

  return []
}

export const getStaticProps = async ({ params, preview }) => {
  const { slug } = params

  return {
    props: {
      slug
    }
  }
}

export default BlogPost
