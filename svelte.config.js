import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html',  // ✅ Good if you're building an SPA (Single Page App)
      precompress: false     // ✅ Fine to leave false
    }),
    paths: {
      base: '',              // ✅ Correct for a username.github.io domain
    },
    prerender: {
      handleMissingId: 'warn' // ✅ Optional but helpful during dev
    }
  }
};

export default config;
