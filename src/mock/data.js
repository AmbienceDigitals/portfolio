import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ayano Ezekiel | Frontend Developer', 
  lang: 'en', 
  description: 'Welcome to Ambience Media', 
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ezekiel Ayano',
  subtitle: 'Frontend JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: 'My name is Ayano Ezekiel, a frontend Engineer with a flair for creating responsive and elegant web applications and mobile oriented web solutions in the least amount of time using JavaScript frameworks and associated technologies for optimal userexperience.',
  paragraphTwo: 'I am a team player, goal oriented person who is passionate about learning and using programming languages to tackle real life problems',
  paragraphThree: 'I am well versed in MEAN and MERN stack technologies',
  resume: 'https://www.linkedin.com/in/ezekiel-ayano/'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'budget-app.png',
    title: 'Budget App',
    info: 'A simple budget app built using Angular 10 and SASS',
    info2: 'mobible responsive ',
    url: 'https://silly-mirzakhani-12143c.netlify.app/',
    repo: 'https://github.com/AmbienceDigitals', 
  },
  {
    id: nanoid(),
    img: 'chat-app.png',
    title: 'Chat Application',
    info: 'Chat applicastion built using React and react engine',
    info2: 'mobile responsive and iffers login and registration options',
    url: 'https://chat-engine-application.netlify.app/',
    repo: 'https://github.com/AmbienceDigitals/chat-application', 
  },
  {
    id: nanoid(),
    img: 'estate.png',
    title: 'Estate',
    info: 'An app developed to offer buying and selling options for buyers and also rent options',
    info2: '',
    url: '#',
    repo: 'https://github.com/AmbienceDigitals/Estate'
  },
  {
    id: nanoid(),
    img: 'read-app.png',
    title: 'Shelf',
    info: 'A pseudo book shelf built using React ',
    info2: '',
    url: 'https://read-app.netlify.app/',
    repo: 'https://github.com/AmbienceDigitals/Udacity_My_Reads_App_Challenge'
  },
   {
    id: nanoid(),
    img: 'netflix-clone.png',
    title: 'Netflix',
    info: 'built with React, react-youtube and movie trailer',
    info2: 'mobile responsive',
    url: 'https://netflix-clone-83933.web.app/',
    repo: 'https://github.com/AmbienceDigitals/netflix'
  },
   {
    id: nanoid(),
    img: 'store.png',
    title: 'Redux Store',
    info: 'built with React, redux-toolkit for state management and fakeApi for data',
    info2: 'mobile responsive',
    url: '#',
    repo: 'https://github.com/AmbienceDigitals/redux-store'
  },
   {
    id: nanoid(),
    img: 'customer.png',
    title: 'Customer Dashboard',
    info: 'built with Angular 10, Ngrx and rxjs for state management and lazy loading',
    info2: 'mobile responsive',
    url: 'https://angular-ngrx-8cd48.web.app/',
    repo: 'https://github.com/AmbienceDigitals/Learning-ngrx'
  },
  {
    id: nanoid(),
    img: 'hulu-app.png',
    title: 'Hulu Web App',
    info: 'Built with Next Js, Tailwind CSS and using TMDB API',
    info2: 'mobile responsive with css grid combined with css flex for optimal breakpoints, image optimization and server side rendering',
    url: 'https://hulu-web-app-5o2y23kwy-ambiencedigitals.vercel.app/',
    repo: 'https://github.com/AmbienceDigitals/Hulu'
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ezekielayano@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter/ayanoezekiel',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ezekiel-ayano/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AmbienceDigitals/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, 
};
