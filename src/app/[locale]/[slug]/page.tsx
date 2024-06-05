import React from 'react'
import { notFound } from 'next/navigation'
import { Blocks } from '@/components/payload/blocks'
import { getPayload } from '@/client/payload'
import { type Locale } from "../../../i18n-config";

type PageProps = {
  params: {
    locale: Locale,
    slug: string
  }
}

export default async function Page({ params: { slug, locale } }: PageProps) {
  const payload = await getPayload()

  const data = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug ?? 'home',
      },
    },
    limit: 1,
    locale: locale as any,
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
