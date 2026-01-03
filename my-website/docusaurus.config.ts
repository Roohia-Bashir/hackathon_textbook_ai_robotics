import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Environment variables (safe for client use via customFields)
const RAG_API_URL =
  process.env.REACT_APP_RAG_API_URL ??
  (process.env.NODE_ENV === 'production'
    ? 'https://roohia-rag-chatbot-backend.hf.space'
    : 'http://localhost:8000');

const config: Config = {
  title: 'AI-Native Textbook Physical AI & Humanoid Robotics',
  tagline:
    'A comprehensive textbook covering ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://Roohia-Bashir.github.io',
  baseUrl: '/hackathon_textbook_ai_robotics/',

  organizationName: 'Roohia-Bashir',
  projectName: 'hackathon_textbook_ai_robotics',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /** 👇 Proper way to expose env vars to client */
  customFields: {
    RAG_API_URL,
    NODE_ENV: process.env.NODE_ENV ?? 'development',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Roohia-Bashir/hackathon_textbook_ai_robotics/edit/main/my-website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Roohia-Bashir/hackathon_textbook_ai_robotics/edit/main/my-website/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    metadata: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {name: 'theme-color', content: '#12affa'},
      {
        name: 'description',
        content:
          'AI-Native Textbook for Physical AI & Humanoid Robotics covering ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action systems',
      },
      {
        name: 'keywords',
        content:
          'robotics, AI, textbook, ROS 2, Gazebo, NVIDIA Isaac, humanoid robotics',
      },
    ],

    navbar: {
      title: 'AI-Native Textbook',
      logo: {
        alt: 'AI-Native Textbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Roohia-Bashir/hackathon_textbook_ai_robotics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [{label: 'Introduction', to: '/docs/intro'}],
        },
        {
          title: 'Resources',
          items: [
            {label: 'ROS 2 Documentation', href: 'https://docs.ros.org/en/humble/'},
            {label: 'NVIDIA Isaac', href: 'https://developer.nvidia.com/isaac'},
            {label: 'Gazebo Simulation', href: 'https://gazebosim.org/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {
              label: 'GitHub',
              href: 'https://github.com/Roohia-Bashir/hackathon_textbook_ai_robotics',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI-Native Textbook`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
