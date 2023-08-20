// import { readable } from 'svelte/store';


export const PATHS = {
    '/': { title: 'Home' },
    // 'privacy': { title: 'Home' },
    '/about': { title: 'About' },
    '/stay-inside': { title: 'Stay Inside', paths: ['privacy'] },
    '/color-and-shape': { title: 'Color & Shape' },
    '/maze': { title: 'Maze', paths: ['privacy'] },

}
// export const paths = readable(PATHS)