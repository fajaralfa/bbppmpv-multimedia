import './bootstrap'
import '../css/app.css'
import '../css/global.css'
import { createInertiaApp } from '@inertiajs/svelte'

createInertiaApp({
    resolve: (name) => {
        const pages =
            import.meta.glob('./Pages/**/*.svelte', { eager: true })
        return pages[`./Pages/${name}.svelte`]
    },
    setup({ el, App, props }) {
        new App({ target: el, props })
    },
    progress: {
        delay: 250,
        color: '#fff',
        includeCSS: true,
        showSpinner: false,
    },
})