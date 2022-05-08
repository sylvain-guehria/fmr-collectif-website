import React from 'react';
import { createRoot } from 'react-dom/client';

import Router from 'next/router';

import PageChange from 'components/lib/PageChange/PageChange';
import logger from '../modules/logger/logger';

let container;
let root;

Router.events.on('routeChangeStart', url => {
  logger.info(`Loading: ${url}`);
  document.body.classList.add('body-page-transition');
  container = document.getElementById('page-transition');
  root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<PageChange path={url} />);
});
Router.events.on('routeChangeComplete', () => {
  container = document.getElementById('page-transition');
  root.unmount();
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  container = document.getElementById('page-transition');
  root.unmount();
  document.body.classList.remove('body-page-transition');
});
