import React from 'react';
import type { GlobalProps } from 'minista';
import { Head } from 'minista';
import { Meta } from '~/components';

// ビルド時の環境変数によって文字コードを変えるようにする
// const charSet = 'utf-8';
const charSet = 'shift_jis';
export default function Global({ children, title, page, url }: GlobalProps) {
  return (
    <>
      <Meta path={url} />
      <Head>
        <meta charSet={charSet} />
        {/* <script defer src="https://unpkg.com/htmx.org@1.9.4"></script> */}
        <link rel="stylesheet" href="/src/assets/index.css" />
      </Head>
      {page}
      {children}
    </>
  );
}
