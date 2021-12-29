import '../styles/globals.css'
import type { AppProps } from 'next/app'

import dynamic from "next/dynamic"
const MediaQuery = dynamic(() => import("./index"), {
  ssr: false
})


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
