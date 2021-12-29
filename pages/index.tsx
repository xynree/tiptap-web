import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'


const Home: NextPage = () => {

  return (    
  <div>
      <Head>
        <title>hi it's xyn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AboutMe />
      </main>
    </div>)


}

export default Home
