// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lewandos', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/lewandos/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['lewandos/lewandos', 'lewandos/page'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Companies I worked for',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sascha Lewandowski',
    description: "Welcome to my GitHub! I'm a seasoned Cloud Engineer and IT Security Expert from Switzerland, passionate about leveraging technology to solve complex problems. My GitHub is a reflection of my journey in tech, showcasing projects and insights I've gained over the years.",
    imageURL: 'https://sle.it-lew.de/wp-content/uploads/2022/05/logo-sl-transparent-white.png',
  },
  social: {
    linkedin: 'sascha-lewandowski',
    twitter: 'arf_szn',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://sle.it-lew.de',
    phone: '',
    email: 'sle-page@it-lew.de',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Azure',
    'AWS',
    'Alibaba',
    'Yandex.Cloud',
    'IT-Security',
    'CI/CD',
  ],
  experiences: [
    {
      company: 'LGT Capital Partners',
      position: 'Senior Cloud Engineer / Cloud Architect',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'https://www.lgtcp.com',
    },
    {
      company: 'SMS digital GmbH',
      position: 'Senior Cloud Engineer',
      from: 'August 2019',
      to: 'May 2023',
      companyLink: 'https://sms-digital.com',
    },
    {
      company: 'Flowfact',
      position: 'Cloud Engineer / Linux Engineer',
      from: 'February 2016',
      to: 'July 2019',
      companyLink: 'https://flowfact.de',
    },
    {
      company: 'Reuter Gruppe',
      position: 'Linux Administrator',
      from: 'July 2013',
      to: 'January 2016',
      companyLink: 'https://reuter.de',
    },
  ],
  certifications: [
    {
      name: 'TÜV IT-Security Advisor',
      body: 'First Certification',
      year: 'May 2019',
      link: 'https://tuev.de',
    },
    {
      name: 'TÜV IT-Security Advisor',
      body: 'Re-Certification',
      year: 'April 2022',
      link: 'https://tuev.de',
    },
    {
      name: 'LCCI Business English',
      body: 'Compulsory test of business english',
      year: 'May 2008',
      link: 'https://www.londonchamber.co.uk',
    },
  ],
  educations: [
    {
      institution: 'IU International University of Applied Science',
      degree: 'Bachelor of Science Informatics',
      from: 'October 2023',
      to: 'Ongoing (2027)',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
