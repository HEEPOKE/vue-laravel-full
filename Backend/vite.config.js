import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import '../css/app.css';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            valetTls: 'my-app.test',
            refresh: true,
        }),
    ],
});
