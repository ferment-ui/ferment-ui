import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			formats: ['es'],
		},
		rollupOptions: {
			// If we want to publish standalone components we don't externalize lit,
			// if you are going to use lit in your own project, you can make it a dep instead.
			// external: /^lit/,
		},
	},
})