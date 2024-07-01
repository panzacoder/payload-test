'use client'
import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { Page } from '../../../payload/payload-types'
import { Blocks } from '../../_components/Blocks'
import { Hero } from '../../_components/Hero'

export function LivePage({ page }) {
  const { data, isLoading } = useLivePreview<Page>({
    initialData: page,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
    depth: 2,
  })

  const { hero, layout } = data

  return (
    <React.Fragment>
      <Hero {...hero} />
      <Blocks
        blocks={layout}
        disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
      />
    </React.Fragment>
  )
}
