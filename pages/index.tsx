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
        <div className='md:flex'>
          {/* <div className='md:w-1/4 md:h-screen md:bg-blue-500'></div> */}

          <img src='./scribble1.svg' className='fixed transform rotate-90 top-0 w-screen -left-24'></img>
          <img src='./scribble2.svg' className='fixed -top-24 -right-24 w-1/2' ></img>

        <AboutMe />
        </div>
      </main>
    </div>)


}

export default Home
