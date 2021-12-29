import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'


const Home: NextPage = () => {

  return (    
  <div>
      <Head>
        <title>xinrui chen</title>
        <meta name="description" content="Personal Website with RTF editor" />
      </Head>
      <main>
        <AboutMe />
      </main>
    </div>)


}

export default Home
