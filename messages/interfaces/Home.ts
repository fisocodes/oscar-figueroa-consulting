import { Collaborations } from './Collaborations'
import { HeroHeader } from './HeroHeader'
import { Testimonials } from './Testimonials'

export interface Home {
  heroHeader: HeroHeader
  collaborations: Collaborations
  testimonials: Testimonials
}
