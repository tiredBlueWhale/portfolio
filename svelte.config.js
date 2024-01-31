// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		// Might be needed
		// prerender: {
		// 	handleHttpError: ({ path, referrer, message }) => {
		// 		// ignore deliberate link to shiny 404 page
		// 		// if (path.includes('www.iubenda.com/privacy-policy')) {
		// 		// 	return;
		// 		// }

		// 		// otherwise fail the build
		// 		throw new Error(message);
		// 	}
		// },
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	},
	preprocess: vitePreprocess()
};

export default config;
