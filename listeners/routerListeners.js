import React from 'react';

import Router from 'next/router';

import PageChange from 'components/lib/PageChange/PageChange.js';
import ReactDOM from 'react-dom';
import logger from '../modules/logger/logger';

Router.events.on('routeChangeStart', url => {
  logger.info(`Loading: ${url}`);

  document.body.classList.add('body-page-transition');
  ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'));
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
