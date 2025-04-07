import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html' // or null if not SPA
    }),
    paths: {
      base: '/my-boycott'  // ✅ important!
    }
  }
};

export default config;
