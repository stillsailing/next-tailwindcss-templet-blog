import { CoreContent, MDXDocumentDate } from 'pliny/utils/contentlayer'

import siteMetadata from '../data/siteMetadata'

export function getAlgoliaObjects(blogs: CoreContent<MDXDocumentDate>[]) {
  return blogs.map((blog) => {
    const map = new Map<number, string[]>()
    blog?.toc.forEach((item) => {
      if (!map.get(item.depth)) {
        map.set(item.depth, [])
      }
      map.get(item.depth)?.push(item.value)
    })
    const url = `${siteMetadata.siteUrl}/${blog.path}`
    return {
      objectID: url,
      url,
      title: blog.title,
      content: blog.summary,
      author: siteMetadata.author,
      tags: blog.tags,
      date: blog.date,
      hierarchy: {
        lvl0: blog.title,
        lvl1: map.get(1) || [],
        lvl2: map.get(2) || [],
        lvl3: map.get(3) || [],
        lvl4: map.get(4) || [],
        lvl5: map.get(5) || [],
        lvl6: map.get(6) || [],
      },
    }
  })
}
