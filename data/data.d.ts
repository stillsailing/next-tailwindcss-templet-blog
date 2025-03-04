import type { CommentsConfig } from 'pliny/comments'
import type { PlinyConfig, Comm } from 'pliny/config'

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
