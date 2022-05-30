import type { NextPage } from 'next'
import Html from 'next/head';
import { useEffect } from 'react';
import { About, Contact, Footer, Hero, Section, SectionModel, Submarine } from '../components'
import { ResourcesProps } from '../components/Resources';
import { Downloads, MadeWithType } from '../types';

const mockImages = ['iphone.png', 'iphone.png', 'iphone.png'];
const madeWithDummy: MadeWithType[] = ['unity'];
const downloadsDummy: Downloads[] = [
  {
    type: 'appstore',
    url: ''
  },
  {
    type: 'playstore',
    url: ''
  }
];


const sections: SectionModel[] = [
  {
    title: 'Color & Shape',
    summary: 'A reaction game which places with the Stroop effect.',
    more: '',
    backgroundColor: 'bg-blue-600',
    waveColor: 'fill-blue-600',
    images: mockImages,
    madeWith: madeWithDummy,
    downloads: downloadsDummy,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae velit et neque lacinia pharetra eu quis diam. Morbi in faucibus metus, eget suscipit nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae velit et neque lacinia pharetra eu quis diam. Morbi in faucibus metus, eget suscipit nibh. Phasellus vitae velit et neque lacinia pharetra eu quis diam. Morbi in faucibus metus, eget suscipit nibh.',
    more: '',
    backgroundColor: 'bg-blue-700',
    waveColor: 'fill-blue-700',
    images: mockImages,
    madeWith: madeWithDummy,
    downloads: downloadsDummy,
  },
  // {
  //   title: 'Stay Inside',
  //   summary: 'It is simple, it is easy and super duper.',
  //   more: '',
  //   backgroundColor: 'bg-blue-800',
  //   waveColor: 'fill-blue-800',
  //   images: mockImages,
  //   madeWith: madeWithDummy,
  //   downloads: downloadsDummy,
  // },
]

const Home: NextPage = () => {
  return (
    <>
      <Hero colorWaveBackground='fill-blue-600' colorWaveForeground='fill-blue-500' />
      <About backgroundColor='bg-blue-500' />
      {sections.map(((section, index) => <Section key={index} isRight={index % 2 === 1} {...section} />))}
      <Contact />
      <Footer />
      {/* <Submarine /> */}
    </>
  )
}

export default Home;