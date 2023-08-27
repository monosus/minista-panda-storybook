import React from 'react';
import { css } from '@styled-system/css';
import HtmlAppendedLink from '~/components/util/HtmlAppendedLink';
import { Head, Image } from 'minista';
export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <script type="module" src="/src/assets/entry.ts" />
      </Head>
      <div className={css({ border: '4px dotted orange', width: '5/12' })}></div>
      <HtmlAppendedLink href="hoge">abbbbbbb</HtmlAppendedLink>
      <nav>
        <HtmlAppendedLink href="/" baseDir="">
          home?
        </HtmlAppendedLink>
      </nav>

      <HtmlAppendedLink href="/">no boost home?</HtmlAppendedLink>
      <figure className={css({ w: '1/3' })}>
        <Image
          src="/src/assets/images/jainam-sheth-SawbRerFzXs-unsplash.jpg"
          format="webp"
          quality={65}
          loading="eager"
        ></Image>
      </figure>
    </>
  );
}
