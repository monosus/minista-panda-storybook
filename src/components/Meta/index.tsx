import React from 'react';
import { Head } from 'minista';
import { meta, type MetaData } from '~/site-data/meta';

interface MetaComponentProps {
  path: string;
}

const MetaComponent: React.FC<MetaComponentProps> = ({ path }) => {
  const currentMeta: MetaData = meta[path];

  if (typeof currentMeta === 'undefined' || currentMeta === null) return null;

  return (
    <Head>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <meta name="keywords" content={currentMeta.keywords} />
    </Head>
  );
};

export default MetaComponent;
