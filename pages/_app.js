import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  let ret = <>

    <Component {...pageProps} />

  </>
  return ret;

}

export default MyApp
