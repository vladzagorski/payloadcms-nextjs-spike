import type { Block } from 'payload/types'
import { HalfImageCard } from './half-image-card'
import { CtaButton } from './cta-button'

export const Section: Block = {
  slug: 'section',
  labels: {
    singular: 'Section',
    plural: 'Sections',
  },
  interfaceName: 'Section',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaButton',
      label: 'CTA Button',
      type: 'blocks',
      maxRows: 1,
      blocks: [CtaButton],
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks: [HalfImageCard],
    },
  ],
}
