module.exports = {
  siteTitle: 'Naad Borole\'s Portfolio',
  siteDescription:
    'Naad Borole is an incoming Software Developer, who loves learning new technologies.',
  siteKeywords:
    'Naad borole, Naad, Borole, naadborole, software engineer, Machine Learning',
  siteUrl: 'https://divyank00.github.io',
  siteImage: 'images/og.png',
  siteLanguage: 'en_US',
  name: 'Naad Borole',
  location: 'Los Angeles, CA',
  email: 'naad.borole2000@gmail.com',
  phone: '+12132769700',
  github: 'https://github.com/Naadborole',
  linkedIn: 'https://www.linkedin.com/in/naad-borole-700a7b16a/',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Naadborole',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/naad-borole-700a7b16a/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact Me',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
