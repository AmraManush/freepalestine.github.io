import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html', // Changed from null for SPA support
      precompress: false, // Disable if having issues
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/my-boycott' : '',
    },
    prerender: {
      handleMissingId: 'warn', // Helps catch missing prerender issues
    }
  }
};

export default config;