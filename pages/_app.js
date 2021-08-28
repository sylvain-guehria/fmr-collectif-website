import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Axios from 'axios';
import { SWRConfig } from 'swr';
import LayoutComponent from '../components/Layouts/LayoutComponent';
import { object } from 'prop-types';

import Head from 'next/head';
import { ProvideAuth } from '../firebase/useAuth';

import 'styles/scss/nextjs-material-kit-pro.scss?v=1.2.0';
import 'styles/css/react-demo.css';
import 'animate.css/animate.min.css';
import '../listeners/routerListeners';

import { Provider } from 'react-redux';
import { useStore } from '../store';

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api';
Axios.defaults.withCredentials = true;

const fetcher = async (url) => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export default function App({ Component, pageProps }) {

  // static async getInitialProps({ Component, _router, ctx }) {
  //   let pageProps = {};

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }

  //   return { pageProps };
  // }
  const layoutProps = Component.getLayoutProps ? Component.getLayoutProps() : {};
  const store = useStore(pageProps.initialReduxState);

  return (
    <React.Fragment>
      <SWRConfig
        value={{
          fetcher,
          dedupingInterval: 10000
        }}
      >
        <Provider store={store}>
          <ToastProvider>
            <ProvideAuth>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
                <title>Fmr-collectif</title>
              </Head>
              <LayoutComponent component={Component} layoutProps={layoutProps}>
                <Component {...pageProps} />
              </LayoutComponent>
            </ProvideAuth>
          </ToastProvider>
        </Provider>
      </SWRConfig>
    </React.Fragment >
  );
}

App.propTypes = {
  Component: object,
  pageProps: object
};
