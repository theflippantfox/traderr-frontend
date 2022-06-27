import adapter from '@sveltejs/adapter-auto';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    
    vite: {
      // plugins: [tsConfigPaths()],
      resolve:{
        alias: {
          '@components': path.resolve('./src/components'),
          '@lib': path.resolve('./src/lib'),
          '@assets': path.resolve('./src/assets'),
          '@typings': path.resolve('./src/typings'),
        }
      },

      server: {
        fs:{
          allow: ['lib/*'],
        }
      }
    }
	},
};

export default config;
