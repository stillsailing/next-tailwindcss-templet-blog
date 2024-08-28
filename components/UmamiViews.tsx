'use client'

import { useEffect, useState } from 'react'

const Views = ({ path }) => {
  const [views, setViews] = useState(0)

  // useEffect(() => {
  //   if (path) {
  //     fetch(`/api/umami?path=${encodeURI(path)}`, { method: 'GET' })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setViews(+result)
  //       })
  //   }
  // }, [path])

  if (views === 0) {
    return null
  }

  return <div>{path} views</div>
}

export default Views
