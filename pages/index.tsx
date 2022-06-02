import type { NextPage } from 'next'
import Head from 'next/head';
import { About, Contact, Footer, Hero, Section, SectionModel, Submarine } from '../components'
import { Downloads, MadeWithType, ImageRow } from '../types';

const mockImageRowIphones = {

}

const mockImages: ImageRow[] =
  [
    {
      justify: 'justify-start',
      images: [
        {
          src: 'iphone.png',
          speed: .2,
          translate: 'translate(10%, 0px)',
        },
        {
          src: 'iphone.png',
          speed: .5,
          translate: '',
        },
        {
          src: 'iphone.png',
          speed: .7,
          translate: 'translate(-10%, 20vh)',
        },

      ]
    },
    {
      justify: 'justify-center',
      images: [
        {
          src: 'ipad.png',
          speed: .6,
        }
      ]
    }
  ];


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
    summary: `
      A simple to learn but hard to master reaction game in which the player gets a simple set of instructions that determen what color and shape to press.
      Among other effects the stroop effect is used to trick the player into pressing the wrong cell.
    `,
    more: '',
    backgroundColor: 'bg-blue-600',
    waveColor: 'fill-blue-600',
    imageRows: [
      {
        justify: 'justify-start',
        images: [
          {
            src: 'iphone_landscape.png',
            speed: .2,
          },
          {
            src: 'iphone_landscape.png',
            speed: .5,
            translate: 'translate(-10%, 0px)',
          }
        ]
      },
      {
        justify: 'justify-center',
        images: [
          {
            src: 'ipad_landscape.png',
            speed: .6,
          }
        ]
      }
    ],
    madeWith: madeWithDummy,
    downloads: downloadsDummy,
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus vitae velit et neque lacinia pharetra eu quis diam. 
    Morbi in faucibus metus, eget suscipit nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    `,
    more: '',
    backgroundColor: 'bg-blue-700',
    waveColor: 'fill-blue-700',
    imageRows: [
      {
        justify: 'justify-start',
        images: [
          {
            src: 'iphone.png',
            speed: .2,
            translate: 'translate(10%, 0px)',
          },
          {
            src: 'iphone.png',
            speed: .7,
            translate: 'translate(-10%, 0vh)',
          },

        ]
      },
      {
        justify: 'justify-center',
        images: [
          {
            src: 'ipad.png',
            speed: .6,
          }
        ]
      }
    ],
    madeWith: madeWithDummy,
    downloads: downloadsDummy,
  },
  {
    title: 'Stay Inside',
    summary: 'Try to stay inside the colored ring, which will change diretions.',
    more: '',
    backgroundColor: 'bg-blue-800',
    waveColor: 'fill-blue-800',
    imageRows: [
      {
        justify: 'justify-center',
        images: [
          {
            src: 'iphone.png',
            speed: .6,
          }
        ]
      },
      {
        justify: 'justify-start',
        images: [
          {
            src: 'iphone.png',
            speed: .2,
            translate: 'translate(10%, 0px)',
          },
          {
            src: 'iphone.png',
            speed: .5,
            translate: '',
          },
        ]
      },
    ],
    madeWith: madeWithDummy,
    downloads: downloadsDummy,
  },
]

const Home: NextPage = () => {
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