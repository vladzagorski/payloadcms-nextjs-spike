import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export async function getPayload(): ReturnType<typeof getPayloadHMR> {
  return getPayloadHMR({ config: await configPromise })
}
