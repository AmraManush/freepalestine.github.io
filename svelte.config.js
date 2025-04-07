import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '200.html' // Optional
    }),
    paths: {
      base: '/my-boycott/docs' // Ensure this matches your repository name
    }
  }
};

export default config;
