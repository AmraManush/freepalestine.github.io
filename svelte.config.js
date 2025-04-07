import adapter from '@sveltejs/adapter-static'; // Change from adapter-auto

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',  // Output directory (default: 'build')
      assets: 'build',
      fallback: null,   // Enable SPA mode (optional)
    }),
    paths: {
       base: process.env.NODE_ENV === 'production' ? '/freepalestine' : '',
    },
  },
};

export default config;
