import React from 'react';
import { css } from '@styled-system/css';
import HtmlAppendedLink from '~/components/util/HtmlAppendedLink';
import { Head, Image, type Metadata } from 'minista';
import { hstack } from '@styled-system/patterns';

export const metadata: Metadata = {
  title: 'about',
  page: 'about hoge',
};
export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <script type="module" src="/src/assets/entry.ts" />
      </Head>
      <div className={css({ border: '4px dotted orange', width: '5/12' })}>
        <HtmlAppendedLink href="hoge">abbbb!!!!!!!</HtmlAppendedLink>
      </div>
      <nav hx-boost="true">
        <HtmlAppendedLink href="/">home?</HtmlAppendedLink>
      </nav>
      <StackImage />
      <HtmlAppendedLink href="/">no boost home?</HtmlAppendedLink>
	  <HtmlAppendedLink href="/">no boost home?</HtmlAppendedLink>
      <script type="module" src="/src/assets/about.ts" />
    </>
  );
}

const StackImage = () => {
  return (
    <figure className={hstack({ w: '1/3', gap: '10' })}>
      <Image
        src="/src/assets/images/jainam-sheth-SawbRerFzXs-unsplash.jpg"
        format="webp"
        quality={65}
        loading="eager"
      ></Image>
      <Image
        src="/src/assets/images/jainam-sheth-SawbRerFzXs-unsplash.jpg"
        format="webp"
        quality={65}
        loading="eager"
      ></Image>
    </figure>
  );
};
