import { Comments as CommentsComponent } from 'pliny/comments'
import siteMetadata from '@/data/siteMetadata'
import Waline from './Waline'

export default function Comments({ slug }: { slug: string }) {
  if (!siteMetadata.comments?.provider) {
    return null
  }
  if (siteMetadata.comments.provider === 'waline') {
    return <Waline {...siteMetadata.comments.walineConfig} />
  }
  return <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
}
