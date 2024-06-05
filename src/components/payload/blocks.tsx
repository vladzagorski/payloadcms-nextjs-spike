import { CtaButton as CtaButtonBlock } from '@/blocks/cta-button'
import { Section as SectionBlock } from '@/blocks/section'
import { HalfImageCard as HalfImageCardBlock } from '@/blocks/half-image-card'
import { CtaButton } from './cta-button'
import { Section } from './section'
import { HalfImageCard } from './half-image-card'
import {
  type CtaButton as CtaButtonType,
  Section as SectionType,
  HalfImageCard as HalfImageCardType,
} from '@/payload-types'

const blockComponents = {
  [CtaButtonBlock.slug]: CtaButton,
  [SectionBlock.slug]: Section,
  [HalfImageCardBlock.slug]: HalfImageCard,
}

export function Blocks({
  blocks,
}: {
  blocks: (CtaButtonType | SectionType | HalfImageCardType)[]
}) {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) {
    return null
  }

  return (
    <div className='space-y-6'>
      {blocks.map((block) => {
        const Block = blockComponents[block.blockType]

        return Block ? <Block {...block} /> : null
      })}
    </div>
  )
}
