import { defineManifest } from '@crxjs/vite-plugin';
import pkg from './package.json' with { type: 'json' };

export default defineManifest({
  manifest_version: 3,
  name: 'Readhub.Tab',
  description: '打开新标签页即看 Readhub 当日热点。极简排版、秒开、深色模式，扫一眼就走。',
  version: pkg.version,
  author: { email: 'hi@kshift.me' },
  homepage_url: 'https://github.com/RuochenLyu/Readhub.Tab',
  incognito: 'split',
  chrome_url_overrides: {
    newtab: 'index.html',
  },
  icons: {
    16: 'icon16.png',
    32: 'icon32.png',
    48: 'icon48.png',
    128: 'icon128.png',
    256: 'icon256.png',
  },
  host_permissions: ['https://api.readhub.cn/'],
});
