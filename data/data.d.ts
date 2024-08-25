import type { PlinyConfig, Comm } from 'pliny/config'
import type { CommentsConfig } from 'pliny/comments'

interface WalineConfig {
  provider: 'waline'
  walineConfig: {
    server: string
  }
}

interface SiteMetadataConfig extends PlinyConfig {
  comments?: CommentsConfig | WalineConfig
}

export type { SiteMetadataConfig, WalineConfig }
