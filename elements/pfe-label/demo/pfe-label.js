window.ZeroMdConfig = {
  prismUrl: [
    // Default Prism URLs
    ['https://cdn.jsdelivr.net/gh/PrismJS/prism@1/prism.min.js', 'data-manual'],
    'https://cdn.jsdelivr.net/gh/PrismJS/prism@1/plugins/autoloader/prism-autoloader.min.js',
  ],
  cssUrls: [
    'https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-material-light.css'
  ]
};

import '@patternfly/pfe-label';
import '@patternfly/pfe-band';
import 'zero-md';

const container = document.querySelector('[data-demo]');

container.addEventListener('close', function(event) {
  event.target.remove();
});

/* global Prism */
customElements.whenDefined('zero-md').then(() => {
  for (const z of document.querySelectorAll('zero-md')) {
    z.render({
      gfm: true,
      highlight: (code, lang) => {
        if (Prism.languages[lang]) {
          return Prism.highlight(code, Prism.languages[lang], lang);
        } else {
          return code;
        }
      },
    });
  }
});
