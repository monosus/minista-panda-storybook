export interface MetaData {
  description: string;
  title: string;
  keywords: string;
}

export const meta: Record<string, MetaData> = {
  '/': {
    description: 'hoge page',
    title: 'hoge | hoge',
    keywords: 'keywords',
  },
};
