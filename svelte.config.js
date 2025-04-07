import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '200.html'
    }),
    paths: {
      base: '/my-boycott' // or '' if deploying to root
    }
  }
};

export default config;
