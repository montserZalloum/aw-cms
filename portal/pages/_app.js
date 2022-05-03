import { wrapper } from '../store/store';
import App from 'next/app'
import SiteLayout from '../layouts/DefaultLayout'
import '../styles/globals.css'
import Loader from '../components/base/Loader';
import Snackbar from '../components/base/Snackbar';


class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const Layout = Component.layout || SiteLayout

    return (
      <Layout>
        <Component {...pageProps} />
        <Loader />
        <Snackbar />
      </Layout>
    )
  }
}

export default wrapper.withRedux(MyApp)
