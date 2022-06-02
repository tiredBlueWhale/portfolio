import type { NextPage } from 'next'
import Head from 'next/head';
import { About, Contact, Footer, Hero, Section} from '../components'
import { sections } from '../data';

const Home: NextPage = () => {
  console.log(sections);

  return (
    <>
      <Head>
        <title>Tired Blue Whale Portfolio</title>
      </Head>
      <Hero colorWaveBackground='fill-blue-600' colorWaveForeground='fill-blue-500' />
      <About backgroundColor='bg-blue-500' />
      {sections.map(((section, index) => <Section key={index} isLeftToRight={index % 2 === 1} {...section} />))}
      <Contact />
      <Footer />
      {/* <Submarine /> */}
    </>
  )
}

export default Home;