
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Personal-protfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Personal-protfolio/home",
    "route": "/Personal-protfolio"
  },
  {
    "renderMode": 2,
    "route": "/Personal-protfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/Personal-protfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Personal-protfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/Personal-protfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Personal-protfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 42671, hash: '2de6afdc741e99e167d79f47fd912ba87c8cf091c4788a101075fd7273a975cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25787, hash: 'ac912f5d52c43814f449d969cb0cfa27e8aaed6c5a2dfae4650bd450d83ac2a4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 82741, hash: 'ef3204cdff965bbdd7ac300f446d0b1c563681a7e2028c7a9186e5a0f5b7a187', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 86206, hash: '0dfe84d42dd1f53a31c9d8d5415723943c20d21a3bf7c4fcc10059d95f62640b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 83481, hash: 'b826a806a9eb8b9bf776978f834f9237bf81cba845872f3d5b885451d6b436a6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 87045, hash: 'f90360b79ea5fc01513f7ce8d8a431c7657c7553a16cf7d9bc15e59334d4e3f1', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-EI7E6VUW.css': {size: 262257, hash: '/CEWSqpN1Yo', text: () => import('./assets-chunks/styles-EI7E6VUW_css.mjs').then(m => m.default)}
  },
};
