import type { Experience } from '~/types';

export const EXPERIENCES: Experience[] = [
  {
    id: 5,
    title: 'Lead Software Engineer',
    company: 'The Inked Network',
    summary:
      'Led the end-to-end development of a cross-platform iOS and Android app, delivering v1 in four months and achieving 400 MAU, and designing secure backend infrastructure with new schemas, row-level security, and complete Stripe subscription management including Apple Pay compliance. Developed and ran high-scale systems such as an AI-driven media pipeline processing 130K images per month, real-time chat with RLS, push notifications with Edge Functions, and a production-grade CI/CD pipeline with preview environments and rollbacks.',
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
      'Saved over $75K per year in infrastructure and search cost savings by re-designing CDN architecture for CloudFront + S3 for our 300K MAU and moving away from Algolia towards TypeSense, as well as improving developer velocity through Docker environments that reduced our onboarding time from a day to under an hour. Built scalable internal systems such as an AI-powered CMS for music content with auto-processing of audio content, an ERP-integrated promo inventory system with barcode scanning capabilities, as well as a fully automated returns system with self-service functionality and one-click refunds.',
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
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Nexpa LLC',
    summary:
      'Built and maintained small business web applications using Vue.js and NestJS, integrating online ordering, payments, and basic automation to help local restaurants manage digital sales and operations.',
    url: '',
    startDate: {
      date: '2022-08-01 00:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    endDate: {
      date: '2024-03-01 00:00:00.000000',
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
] as const;
