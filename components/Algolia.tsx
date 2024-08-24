'use client'

import { DocSearch, DocSearchProps } from '@docsearch/react'

export default function Algolia({ appId, apiKey, indexName }: DocSearchProps) {
  return <DocSearch appId={appId} apiKey={apiKey} indexName={indexName} />
}
