import path from 'path';
import { defineConfig } from 'minista';
const DEV_SITE_DIR = 'original';
export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: path.resolve('src') + '/' },
      {
        find: '@styled-system',
        replacement: path.resolve('./styled-system') + '/',
      },
    ],
  },
  root: '',
  base: `/${DEV_SITE_DIR}`,
  out: `dist/${DEV_SITE_DIR}`,
});
