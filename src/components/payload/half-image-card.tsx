import { cn } from '@/lib/utils'
import { type ComponentPropsWithoutRef } from 'react'
import { CtaButton } from './cta-button'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../ui/card'
import { type HalfImageCard as HalfImageCardType } from '@/payload-types'
import Image from 'next/image'

type HalfImageCardProps = HalfImageCardType & Omit<ComponentPropsWithoutRef<typeof Card>, 'title'>

export function HalfImageCard({
  title,
  description,
  image,
  imagePosition,
  ctaButton: ctaButtons,
  className,
  ...restProps
}: HalfImageCardProps) {
  const ctaButton = (ctaButtons ?? [])[0]

  return (
    <Card className={cn(className)} {...restProps}>
      <div
        className={cn('flex flex-col items-center lg:flex-row', {
          'lg:flex-row-reverse': imagePosition === 'Right',
        })}
      >
        <div
          className={cn('flex flex-1', {
            'justify-end': imagePosition === 'Right',
          })}
        >
          {image && <Image width={image.width} height={image.height} src={image.url} />}
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle className="text-5xl font-bold">{title}</CardTitle>
            <CardDescription className="text-lg">{description}</CardDescription>
          </CardHeader>
          <CardContent>{ctaButton && <CtaButton {...ctaButton} />}</CardContent>
        </div>
      </div>
    </Card>
  )
}
