import rsToys from '@assets/projects_img/toys.png';
import todo from '@assets/projects_img/todo.png';
import songBird from '@assets/projects_img/song_bird.png';
import puzzle from '@assets/projects_img/puzzle.png';
import zoo from '@assets/projects_img/zoo.png';
import travel from '@assets/projects_img/travel.png';
import gpt from '@assets/projects_img/gpt.png';

export interface ProjectData {
  title: string;
  img: string;
  link: string;
  description: string[];
}

const projectsData: ProjectData[] = [
  {
    title: 'Online Shop',
    img: rsToys,
    link: 'https://madknight404.github.io/online-store/',
    description: [
      'Working in team',
      'MVC pattern',
      'SPA',
      'TypeScript',
      'Filters',
      'Hash routing',
      'Payment system',
      'Cart pagination',
      'Jest testing',
    ],
  },
  {
    title: 'Todo list',
    img: todo,
    link: 'https://todolist-madknight404.netlify.app/',
    description: [
      'Working in team',
      'Backend server',
      'MongoDB',
      'Pomodorro timer',
      'Settings',
      'Localization ',
      'Theme switching ',
      'Custom UI kit',
      'Framer.motion',
    ],
  },
  {
    title: 'Song-bird game',
    img: songBird,
    link: 'https://madknight404.github.io/SongBird-game/Songbird/',
    description: [
      'Game logic',
      'Responsive design',
      'Localization',
      'Custom audio player',
      'Animations',
      'Birds gallery',
    ],
  },
  {
    title: 'Gem puzzle',
    img: puzzle,
    link: 'https://madknight404.github.io/GemPuzzle/RssGemPuzzle/',
    description: [
      'Game logic',
      'Responsive design',
      'Animations',
      'Different levels',
      'Results table',
    ],
  },
  {
    title: 'Online-zoo',
    img: zoo,
    link: 'https://madknight404.github.io/Online-zoo/pages/main/',
    description: [
      'Two different pages',
      'Responsive design',
      'Burger menu',
      'Slider',
      'Carousel',
      'Inputs validation ',
    ],
  },
  {
    title: 'Travel',
    img: travel,
    link: 'https://madknight404.github.io/Travel/',
    description: [
      'Responsive design',
      'Modal window',
      'Burger menu',
      'Slider',
    ],
  },
  {
    title: 'Chat GPT',
    img: gpt,
    link: 'https://chatbot-e59zzwevv-madknight404.vercel.app/',
    description: [
      'GPT API',
      'Simple application',
      'Responsive design',
    ],
  },
];

export default projectsData;
