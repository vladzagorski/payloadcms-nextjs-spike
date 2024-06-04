import { postgresAdapter } from '@payloadcms/db-postgres'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
// import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Users } from './collections/users'
import { Pages } from './collections/pages'
import { Media } from './collections/media'
import { s3Storage, type S3StorageOptions } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const s3StorageOptions: S3StorageOptions = {
  collections: {
    [Media.slug]: {
      prefix: 'media',
    },
  },
  bucket: String(process.env.S3_BUCKET),
  config: {
    forcePathStyle: true,
    credentials: {
      accessKeyId: String(process.env.S3_ACCESS_KEY_ID),
      secretAccessKey: String(process.env.S3_SECRET_ACCESS_KEY),
    },
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
  },
}

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages, Media],
  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [s3Storage(s3StorageOptions)],

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
})
