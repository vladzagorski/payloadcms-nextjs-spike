import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt',
      type: 'text',
    },
  ],
  upload: true,
  access: {
    read: () => true,
  },
}
