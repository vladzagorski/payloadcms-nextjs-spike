import React from 'react'
import { notFound } from 'next/navigation'
import { Blocks } from '@/components/payload/blocks'
import { getPayload } from '@/client/payload'

type PageProps = {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: PageProps) {
  const payload = await getPayload()

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug ?? 'home',
      },
    },
    limit: 1,
  })

  if (!data || data.docs.length === 0) {
    return notFound()
  }

  const page = data.docs[0]

  return (
    <div className="container space-y-6 py-12">
      {page.name}
      {page.content && <Blocks blocks={page?.content} />}
    </div>
  )
}
