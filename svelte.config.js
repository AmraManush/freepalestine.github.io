import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html' // or null if you don't need SPA routing
    }),
    paths: {
      base: '/my-boycott'  // <-- This is the fix!
    }
  }
};

export default config;
