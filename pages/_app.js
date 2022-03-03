import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Axios from 'axios';
import LayoutComponent from '../components/Layouts/LayoutComponent';

import App from 'next/app';
import Head from 'next/head';
import { ProvideAuth } from '../hooks/useAuth';
import { ProvideNotification } from '../hooks/useNotification';
import { ProvideBoutique } from '../hooks/useBoutique';
import Script from 'next/script';

import 'styles/scss/nextjs-material-kit-pro.scss?v=1.2.0';
import 'styles/css/react-demo.css';
import 'animate.css/animate.min.css';
import '../listeners/routerListeners';

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api';
Axios.defaults.withCredentials = true;

export default class MyApp extends App {

  static async getInitialProps({ Component, _router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    const layoutProps = Component.getLayoutProps ? Component.getLayoutProps() : {};

    return (
      <React.Fragment>
        <ToastProvider>
          <ProvideAuth>
            <ProvideNotification>
              <ProvideBoutique>
                <Head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                  />
                  <Script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></Script>
                  <title>Fmr-collectif</title>
                </Head>
                <LayoutComponent component={Component} layoutProps={layoutProps}>
                  <Component {...pageProps} />
                </LayoutComponent>
              </ProvideBoutique>
            </ProvideNotification>
          </ProvideAuth>
        </ToastProvider>
      </React.Fragment >
    );
  }
}
