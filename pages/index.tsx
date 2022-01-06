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



          <img src='./scribble4l.svg' className='fixed  scale-200  top-0 -left-36 w-screen scale-200' ></img>
          <img src='./scribble4l.svg' className='fixed transform rotate-45 scale-200  -top-96 left-96 lg:w-screen h-screen scale-200' ></img>

          <img src='./scribble3.svg' className='fixed  -top-36 w-screen -left-0 scale-200 '></img>
          {/* <img src='./scribble3.svg' className='fixed top-0 w-screen left-72'></img> */}

        <AboutMe />
        </div>
      </main>
    </div>)


}

export default Home
