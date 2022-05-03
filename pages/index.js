import Head from 'next/head'

import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiEthereum,
  SiSolidity,
  SiFlutter,
} from 'react-icons/si'

import SiteHeader from '@components/header'

const Home = () => {
  return (
    <main>
      <Head>
        <title>Hi &mdash; Allen McIntosh II</title>
        <meta name='theme-color' content='#223372' />
      </Head>
      <SiteHeader />
      <section className='full-page center-content bg-primary text-white'>
        <div className='text-center'>
          <h2 className='text-9xl'>Hi</h2>
          <h3 className='text-3xl'>Yeah, that's the best I got.</h3>
          <div className='flex justify-center space-x-6 mt-8'>
            <SiJavascript size='40' />
            <SiReact size='40' />
            <SiTailwindcss size='40' />
            <SiFlutter size='40' />
            <SiSolidity size='40' />
            <SiEthereum size='40' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
