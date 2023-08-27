import React from 'react';
import type { Metadata } from 'minista';
import { Head } from 'minista';
import * as Components from '~/components';
import { Button, heading as Heading } from '~/components';
import HtmlAppendedLink from '~/components/util/HtmlAppendedLink';
import InsertHtml from '~/components/util/InsertHtml';


export const metadata: Metadata = {
  title: 'Home',
  page: 'hoge',
};
const index = () => {
  return (
    <>
      <Head>
        <script type="module" src="/src/assets/entry.ts" />
      </Head>
      <p>
        <strong>hogehoge has</strong>
      </p>
      <InsertHtml filePath="/include/hoge" hxTrigger={{ event: "revealed",delay:'4s' }} partName='recms-hoge-parts'/>


      <nav hx-boost="true">
        <HtmlAppendedLink href="/about" className="hoge">
          about.html?
        </HtmlAppendedLink>
        <HtmlAppendedLink href="/about" className="hoge" baseDir="/other">
          other about.html?
        </HtmlAppendedLink>
        <a href="/about">about</a>
      </nav>
      <HtmlAppendedLink href="/about" className="hoge">
        no boost
      </HtmlAppendedLink>
      <div>Enter</div>
      <Button size="sm" visual="solid">
        button
      </Button>
      <span>oooo</span>
      <Button size="sm" visual="outline">
        button
      </Button>
      <Button size="sm" visual="outline">
        button
      </Button>
      <Heading as="h1">hoge</Heading>
      <Components.heading as="h2">piyo</Components.heading>
      {/* <img src="/path/to/hoge.jpg" alt='' /> */}
    </>
  );
};

export default index;
