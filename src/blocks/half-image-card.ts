import type { Block } from 'payload/types'
import { CtaButton } from './cta-button'

export const HalfImageCard: Block = {
  slug: 'halfImageCard',
  labels: {
    singular: 'Half image card',
    plural: 'Half image cards',
  },
  fields: [
    {
      name: 'internalName',
      label: 'Internal name',
      type: 'text',
      required: true,
    },
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
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imagePosition',
      label: 'Image position',
      type: 'select',
      options: ['Left', 'Right'],
      defaultValue: 'Left',
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
      blocks: [],
    },
  ],
}
