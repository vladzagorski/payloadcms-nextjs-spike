import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { type CtaButton as CtaButtonType } from '@/payload-types'

type CtaButtonProps = CtaButtonType & ComponentPropsWithoutRef<typeof Button>

export function CtaButton({ title, url, className, ...restProps }: CtaButtonProps) {
  return (
    <Button className={cn(className)} {...restProps}>
      <Link href={url}>{title}</Link>
    </Button>
  )
}
