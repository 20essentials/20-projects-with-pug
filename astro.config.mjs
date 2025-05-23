// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  // Deploy
  base: 'project-000-948',
  site: 'https://20essentials.github.io'

  //Localhost
  // base: '.',
  // site: 'http://localhost:4321/',
  // server: {
  //   host: true
  // }
});
