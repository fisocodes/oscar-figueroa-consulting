import { Page } from './Page'

export interface Site {
  pages: Record<string, Page>
  components?: Record<string, unknown>
}
