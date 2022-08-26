import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  // Your final, deployed URL.
  //
  // Astro uses this full URL to generate your sitemap
  // and canonical URLs in your final build.
  site: 'https://www.my-site.dev',
  // Specifies the output target for builds.s
  //
  // ‘static’ - Building a static site to be deploy to any static host.
  output: 'static',
  // Astro sitemap.
  //
  // Ref: https://docs.astro.build/en/guides/integrations-guide/sitemap/
  integrations: [sitemap(), compress()],
  // Listen on all addresses, including LAN and public addresses.
  //
  // Ref: https://docs.astro.build/en/reference/configuration-reference/#serverhost
  server: { host: true },
});
