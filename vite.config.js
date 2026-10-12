import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			// Lets any .scss file write @use 'abstracts/variables' instead of '../../../styles/abstracts/variables'
			scss: { loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))] },
		},
	},
});
