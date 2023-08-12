import React from 'react'
import type { GlobalProps } from 'minista'
import { Head } from 'minista'
import { Meta } from '~/components'

export default function Global({ children,title,page,url }: GlobalProps) {
  return (
    <>
      <Meta path={url} />
      <Head>
        <link rel="stylesheet" href="/src/assets/index.css" />
      </Head>
      {page}
      {children}
    </>
  )
}
