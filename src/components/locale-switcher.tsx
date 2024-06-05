'use client'

import { redirect, usePathname } from 'next/navigation'
import { i18n, type Locale } from '../i18n-config'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const handleValueChange = (value: Locale) => {
    if (!pathName) {
      redirect('/')
    }
    
    const segments = pathName.split('/')
    if (segments.length > 1) {
      segments[1] = value
      const newUrl = segments.join('/')
      redirect(newUrl)
    } else {
      redirect('/')
    }
  }

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className='w-56'>
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
