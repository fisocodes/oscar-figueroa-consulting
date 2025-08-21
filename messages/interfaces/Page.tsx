import { Section } from './Section'

export interface Page {
  metadata: Record<string, string>
  sections: Record<string, Section>
  [key: string]: unknown
}
