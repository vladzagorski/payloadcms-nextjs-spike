import { CtaButton } from './cta-button'
import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { type Section as SectionType } from '@/payload-types'
import { Blocks } from './blocks'

type UiSectionProps = SectionType & Omit<ComponentPropsWithoutRef<'section'>, 'title'>

export function Section({
  title,
  description,
  ctaButton: ctaButtons,
  content,
  className,
  ...restProps
}: UiSectionProps) {
  const ctaButton = (ctaButtons ?? [])[0]
  return (
    <section aria-labelledby="section-title" className={cn('space-y-6', className)} {...restProps}>
      <div className="space-y-3 text-center">
        <h1 id="section-title" className="text-6xl">
          {title}
        </h1>

        {description && <p className="text-3xl">{description}</p>}

        {ctaButton && <CtaButton {...ctaButton} />}

        {content && <Blocks blocks={content} />}
      </div>
    </section>
  )
}
