import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      ignored: ['src/css/**/*.*'] // ignore changes to source css files, use generated one
    },
  }
});