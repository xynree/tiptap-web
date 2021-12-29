import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'


const Home: NextPage = () => {

  return (    
  <div>
      <Head>
        <title>xinrui chen</title>
        <link rel="icon" href="./image.svg" />
        <meta name="description" content="hi i'm xinrui!" />
      </Head>
      <main>
        <AboutMe />
      </main>
    </div>)


}

export default Home
