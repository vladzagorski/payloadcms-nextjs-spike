import { Section } from '@/blocks/section'
import type { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks: [Section],
    },
  ],
  access: {
    read: () => true,
  },
}
