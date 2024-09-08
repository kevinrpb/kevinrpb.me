import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BezvUy-E.mjs';
import { manifest } from './manifest_CdPxMNa9.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cv.astro.mjs');
const _page2 = () => import('./pages/resume.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.4_@types+node@22.5.4_rollup@4.21.2_sass@1.78.0_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cv.astro", _page1],
    ["src/pages/resume.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "670cf4ea-0756-4a17-91ab-fa0807be72d8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
