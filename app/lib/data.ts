import { TimelineItem } from './type';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kha',
  role: 'Front End Developer',
  description:
    "I'm passionate about creating unique and innovative things with great user experiences. I love animals, pop music, and beautiful places.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/khavanvo/',
    github: 'https://github.com/vankha1910',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Do 100 Things',
    description:
      'This app helps you build long-lasting habits by motivating you to complete tasks 100 times. Track your progress and stay committed to your goals.',
    stack: ['React', 'Tailwind', 'Redux', 'TypeScript'],
    sourceCode: 'https://github.com/vankha1910/100-things',
    livePreview: 'https://100-things.vercel.app/',
    image: '/projects/100-things.png',
  },
  {
    name: 'My Coffee',
    description:
      'A e-commerce app built for a coffee shop, featuring product listings, cart management, and a streamlined checkout process. It integrates with a backend API for efficient order and user management.',
    stack: ['React', 'ExpressJS', 'Redux', 'React Query', 'React Hooks Form'],
    sourceCode: 'https://github.com/vankha1910/grocery-market-react',
    livePreview: 'https://my-coffee-shop-kv.vercel.app/',
    image: '/projects/my-coffee.png',
  },
  {
    name: 'Wordle',
    description:
      'A responsive clone of the popular word game "Wordle" that challenges players with word-guessing puzzles. The app tracks player progress and performance for an engaging experience.',
    stack: ['React', 'Tailwind', 'Redux', 'TypeScript'],
    sourceCode: 'https://github.com/vankha1910/react-wordle',
    livePreview: 'https://react-wordle-lilac.vercel.app/',
    image: '/projects/wordle.png',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS/SCSS',
  'JavaScript/TS',
  'NodeJS',
  'ReactJS',
  'NextJS',
  'Redux',
  'React Query',
  'React Hooks Form',
  'Styled Components',
  'Tailwind CSS',
  'Ant Design',
  'Git',
  'Jest',
];

const experiences: TimelineItem[] = [
  {
    year: 'May 2022 - Jul 2023',
    title: 'Angel Technology Investment JSC',
    subtitle: 'Frontend Developer',
    description:
      'As a Frontend Developer, I designed and developed web applications using ReactJS, HTML, CSS, and JavaScript. Collaborating closely with the design team, I created user-friendly interfaces and optimized user experiences by implementing new features.',
    type: 'experience',
  },

  {
    year: 'Mar 2022 - May 2022',
    title: 'Angel Technology Investment JSC',
    subtitle: 'Internship',
    description:
      'During my internship, I focused on learning and teamwork. I participated in cross-department meetings to discuss project requirements, enhancing my communication skills and understanding of the software development process.',
    type: 'education',
  },
  {
    year: '2018 - 2022',
    title: 'University of Transport and Communication',
    subtitle: "Bachelor's Degree in Information Technology",
    description:
      'In my program, I studied programming languages such as C, C++, and Python, along with software development principles. I developed problem-solving skills and essential soft skills like communication and teamwork, preparing me for a successful career in IT.',
    type: 'experience',
  },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dev.vankha@mail.com',
};

export { header, about, projects, skills, contact, experiences };
