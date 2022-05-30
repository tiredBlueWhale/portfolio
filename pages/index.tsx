import type { NextPage } from 'next'
import { About, Contact, Footer, Hero, Section, SectionModel } from '../components'

const sections: SectionModel[] = [
  {
    title: 'Color & Shape',
    summary: 'A reaction game which places with the Stroop effect.',
    more: '',
    backgroundColor: 'bg-blue-600',
    waveColor: 'fill-blue-600',
    images: ['/iphone.png', '/iphone.png', '/iphone.png'],
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae velit et neque lacinia pharetra eu quis diam. Morbi in faucibus metus, eget suscipit nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae velit et neque lacinia pharetra eu quis diam. Morbi in faucibus metus, eget suscipit nibh.',
    more: '',
    backgroundColor: 'bg-blue-700',
    waveColor: 'fill-blue-700',
    images: ['/iphone.png', '/iphone.png', '/iphone.png'],
  },
  {
    title: 'Stay Inside',
    summary: 'It is simple, it is easy and super duper.',
    more: '',
    backgroundColor: 'bg-blue-800',
    waveColor: 'fill-blue-800',
    images: ['/iphone.png', '/iphone.png', '/iphone.png'],
  },
]

const Home: NextPage = () => {
  return (
    <div id="viewport" className='fixed inset-0 flex flex-col items-stretch bg-blue-700 snap-proximity snap-y snap-normal sm:snap-none scroll-smooth overflow-y-scroll'>
      <Hero colorWaveBackground='fill-blue-600' colorWaveForeground='fill-blue-500' />
      <div className='flex-1 bg-blue-500 self-center z-10'>
        <About />
        <div className=''>
          {sections.map(((section, index) => <Section key={index} isRight={index % 2 === 1} {...section} />))}
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
