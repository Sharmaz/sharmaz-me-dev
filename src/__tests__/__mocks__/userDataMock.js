const userDataMock = {
  id: '01',
  email: 'mock@ivanrobles.pro',
  role: 'admin',
  createdAt: '2023-08-11T20:36:02.000Z',
  profile: {
    id: '01',
    userId: '01',
    name: 'Admin',
    profilePic: 'https://no-photo.com',
    about: 'App Owner',
    blog: 'https://no-blog.com',
    github: 'https://no-github.com',
    linkedIn: 'https://no-linkedin.com/',
    twitter: 'https://no-twitter.com/',
    resume: 'https://ivanrobles.pro/content/files/2023/08/IvanRoblesResume.pdf',
  },
  jobs: [
    {
      id: '01',
      userId: '01',
      name: 'Modcloth',
      dateStarted: '2020-06-01',
      dateEnded: '2021-04-01',
      description: 'A clothing store with salesforce storefront.',
      role: 'Software Engineer',
      details: {
        list: [
          'Maintaing legacy code with vanilla JS, JQuery, JQuery-UI, and elsewhere in React Oldie (class components).',
          'Added features. In style terms, I worked with Bootstrap and MaterialUI using SASS.',
          'Added features in the update to move the store to a new stack. It was a Proof of Concept. We used React with hooks, NextJS with Contentstack, and CommerceTools. The POC was stylized with Bootstrap and SASS.',
        ],
      },
    },
  ],
  projects: [
    {
      id: '4745ddc3-2c24-4a8f-8b59-ed18cc340cf0',
      userId: '5aa43ddd-9761-47a1-8a54-acd004ae2db0',
      name: 'Web Dungeon VR',
      description: 'A Web VR Experience.',
      githubLink: 'https://github.com/Sharmaz/WebDungeonVR',
      demoLink: 'https://sharmaz.github.io/WebDungeonVR/',
      tags: {
        list: [
          'A-frame',
          'Javascript',
          'VR',
        ],
      },
    },
  ],
};

export default userDataMock;
