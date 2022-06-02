import { Download, MadeWithType, SectionModel } from "../types";

const madeWithDummy: MadeWithType[] = ['unity'];
const downloadsDummy: Download[] = [
  {
    type: 'appstore',
    url: ''
  },
  {
    type: 'playstore',
    url: ''
  }
];


export const sections: SectionModel[] = [
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