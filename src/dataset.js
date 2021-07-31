const defaultDataset = {
  init: {
    answers: [
      { content: 'I want to ask for a job', nextId: 'job_offer' },
      {
        content: 'How can I start a career as an engineer ?',
        nextId: 'consultant',
      },
      {
        content: 'I want to expand my network',
        nextId: 'community',
      },
      { content: 'Do you want to get some tea?', nextId: 'dating' },
    ],
    question: 'Hi！How can I help you？',
  },
  job_offer: {
    answers: [
      {
        content: 'I want you to create a Corporate Website',
        nextId: 'website',
      },
      { content: 'I want you to create a Web app', nextId: 'webapp' },
      {
        content: 'I want you to create an automation tool',
        nextId: 'automation_tool',
      },
      { content: 'Other', nextId: 'other_jobs' },
    ],
    question: 'What kind of job would you like me to do？',
  },
  website: {
    answers: [
      { content: 'Contact', nextId: 'contact' },
      { content: 'Home', nextId: 'init' },
    ],
    question: 'Thank you for your inquiry about a Website. Please contact us.',
  },
  webapp: {
    answers: [
      { content: 'Contact', nextId: 'contact' },
      { content: 'Home', nextId: 'init' },
    ],
    question: 'Thank you for your inquiry about a Web app. Please contact us.',
  },
  automation_tool: {
    answers: [
      { content: 'Contact', nextId: 'contact' },
      { content: 'Home', nextId: 'init' },
    ],
    question:
      'Thank you for your inquiry about an automation tool. Please contact us.',
  },
  other_jobs: {
    answers: [
      { content: 'Contact', nextId: 'contact' },
      { content: 'Home', nextId: 'init' },
    ],
    question: 'Feel free to ask any question. Please contact us.',
  },
  consultant: {
    answers: [
      {
        content: 'Watch YouTube video',
        nextId: 'https://www.youtube.com/',
      },
      { content: 'Build a professional network ', nextId: 'community' },
      { content: 'Home', nextId: 'init' },
    ],
    question:
      'You can watch free nice tutorials on YouTube. You can also build a network with other developers all over the world. ',
  },
  community: {
    answers: [
      { content: 'What is the LinkedIn？', nextId: 'community_activity' },
      {
        content: 'I want to build a new network',
        nextId: 'https://www.linkedin.com/',
      },
      { content: 'Home', nextId: 'init' },
    ],
    question: 'I recommend you to start LinkedIn to expand your network!',
  },
  community_activity: {
    answers: [
      {
        content: 'I want to know more about LinkedIn',
        nextId: 'https://en.wikipedia.org/wiki/LinkedIn',
      },
      {
        content: 'I want to start LinkedIn',
        nextId: 'https://www.linkedin.com/',
      },
      { content: 'Home', nextId: 'init' },
    ],
    question:
      "LinkedIn is the world's largest professional network on the internet.\nYou can use LinkedIn to find the right job, connect and strengthen professional relationships",
  },
  dating: {
    answers: [
      {
        content: 'Send a message',
        nextId: 'https://www.linkedin.com/in/yoshikisakai',
      },
      { content: 'Home', nextId: 'init' },
    ],
    question: 'For sure! Please DM me!',
  },
};

export default defaultDataset;
