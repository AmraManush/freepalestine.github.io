import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',        // <-- Build output goes to /docs
      assets: 'docs',
      fallback: '200.html'  // Optional: for SPA support
    }),
    paths: {
      base: '/my-boycott'   // or '' if deploying to amramanush.github.io
    }
  }
};

export default config;
