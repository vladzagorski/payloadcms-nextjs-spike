import type { Block } from 'payload/types'

export const CtaButton: Block = {
  slug: 'ctaButton',
  labels: {
    singular: 'CTA button',
    plural: 'CTA buttons',
  },
  interfaceName: 'CtaButton',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      label: 'Url',
      type: 'text',
      required: true,
    },
    {
      name: 'variant',
      label: 'Variant',
      type: 'select',
      options: ['default', 'secondary'],
      defaultValue: 'default',
    },
  ],
}
