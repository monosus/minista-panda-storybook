import React from 'react';
import type { PageProps, Metadata } from 'minista';
import { Head } from 'minista';
import * as Components from '~/components';
import { Button, heading as Heading } from '~/components';

export const metadata: Metadata = {
  title: 'Home',
  page: 'hoge',
};
const index = ({ url, title, children }: PageProps) => {
  return (
    <>
      <Head>
        <script type="module" src="/src/assets/entry.ts" />
      </Head>
      <div>Enter</div>
      <Button size="sm" visual="solid">
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
