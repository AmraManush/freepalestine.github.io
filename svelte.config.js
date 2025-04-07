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
      base: process.argv.includes('dev') ? '' : '/my-boycott', // Replace with your repo name
    },
  },
};

export default config;