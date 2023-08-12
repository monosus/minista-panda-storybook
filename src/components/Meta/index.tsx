// MetaComponent.tsx

import React from 'react';
import { Head } from 'minista';  // `react-helmet` パッケージを利用
import { meta, type MetaData } from '~/site-data/meta'; // 上で定義した型とオブジェクトをインポート

interface MetaComponentProps {
  path: string;
}

const MetaComponent: React.FC<MetaComponentProps> = ({ path }) => {
  const currentMeta: MetaData = meta[path];

  if (!currentMeta) return null;

  return (
    <Head>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <meta name="keywords" content={currentMeta.keywords} />
    </Head>
  );
};

export default MetaComponent;
