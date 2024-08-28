'use client'

import { useEffect, useState } from 'react'

const Views = ({ path }) => {
  const [views, setViews] = useState(0)
  useEffect(() => {
    if (path) {
      fetch('/api/umami').then((result) => {
        console.log(result)
      })
    }
  }, [path])
  if (views === 0) {
    return null
  }
  return <div>{path} views</div>
}

export default Views
