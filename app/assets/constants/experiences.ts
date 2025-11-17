import type { Experience } from '~/types';

export const EXPERIENCES: Experience[] = [
  {
    id: 5,
    title: 'Lead Software Engineer / Owner',
    company: 'The Inked Network',
    summary:
      'Launched a Nuxt + Supabase platform adopted by 200+ artists with real-time chat, subscriptions, and AI-powered search. Integrated Stripe, GPT-4o, Google Maps, and ImageKit/S3, and enforced RLS policies for secure, scalable data isolation.',
    url: 'https://www.theinkednetwork.com',
    startDate: {
      date: '2025-06-18 17:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    endDate: null,
    visible: true,
    tags: [],
  },
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Ethika',
    summary:
      'Cut Algolia search costs by 60% and boosted load speed by 30% through caching and image optimizations. Built a CMS for 500+ talent profiles and 5,000+ assets. Launched a viral game (20K players, 550K+ plays) and integrated Klaviyo for 26% higher engagement.',
    url: 'https://www.ethika.com/',
    startDate: {
      date: '2022-05-25 23:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    endDate: null,
    visible: true,
    tags: [
      {
        id: 3,
        title: 'Vue.js',
        logoName: 'vuedotjs',
        url: 'https://vuejs.org/guide/introduction.html',
        featured: true,
      },
      {
        id: 4,
        title: 'PHP',
        logoName: 'php',
        url: 'https://www.php.net/manual/en',
        featured: true,
      },
      {
        id: 10,
        title: 'MongoDB',
        logoName: 'mongodb',
        url: 'https://www.mongodb.com/docs',
        featured: true,
      },
      {
        id: 19,
        title: 'Symfony',
        logoName: 'symfony',
        url: 'https://symfony.com/doc/current/index.html',
        featured: true,
      },
      {
        id: 20,
        title: 'Bootstrap',
        logoName: 'bootstrap',
        url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction',
        featured: true,
      },
      { id: 48, title: 'AWS', logoName: null, url: null, featured: false },
      {
        id: 1,
        title: 'Typescript',
        logoName: 'typescript',
        url: 'https://www.typescriptlang.org/docs/',
        featured: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Nexpa LLC',
    summary:
      'Built a multilingual food truck site with Square online ordering (+15% revenue) and automated menu updates. Developed a NestJS backend with CI/CD pipelines, cutting deployment time 40% and improving reliability.',
    url: '',
    startDate: {
      date: '2022-08-01 00:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    endDate: {
      date: '2025-03-01 00:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    visible: true,
    tags: [
      {
        id: 3,
        title: 'Vue.js',
        logoName: 'vuedotjs',
        url: 'https://vuejs.org/guide/introduction.html',
        featured: true,
      },
      {
        id: 25,
        title: 'NestJS',
        logoName: null,
        url: 'https://docs.nestjs.com',
        featured: true,
      },
      {
        id: 10,
        title: 'MongoDB',
        logoName: 'mongodb',
        url: 'https://www.mongodb.com/docs',
        featured: true,
      },
      { id: 48, title: 'AWS', logoName: null, url: null, featured: false },
    ],
  },
  {
    id: 3,
    title: 'Web Programmer',
    company: 'Saddleback College Robotics Club',
    summary:
      'Built a Django + ROS2 GUI for real-time rover control and telemetry. Integrated live camera feeds into a Vue.js base station, helping the team reach the University Rover Challenge finals and rank three places higher.',
    url: '',
    startDate: {
      date: '2023-07-01 00:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    endDate: {
      date: '2024-07-01 00:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    visible: true,
    tags: [
      {
        id: 3,
        title: 'Vue.js',
        logoName: 'vuedotjs',
        url: 'https://vuejs.org/guide/introduction.html',
        featured: true,
      },
      {
        id: 30,
        title: 'Django',
        logoName: 'django',
        url: 'https://docs.djangoproject.com/',
        featured: true,
      },
      {
        id: 50,
        title: 'ROS2',
        logoName: null,
        url: 'https://docs.ros.org/en/foxy',
        featured: true,
      },
      {
        id: 6,
        title: 'Python',
        logoName: 'python',
        url: 'https://docs.python.org/3/',
        featured: true,
      },
      {
        id: 8,
        title: 'C++',
        logoName: 'cplusplus',
        url: 'https://en.cppreference.com/w/',
        featured: false,
      },
    ],
  },
] as const;
