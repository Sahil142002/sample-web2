// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Upside Down Labs',
  tagline: 'DIY Neuroscience for all!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'upsidedownlabs', // Usually your GitHub org/user name.
  projectName: 'upsidedownlabs.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Upside Down Labs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},

          {
            href: 'https://upsidedownlabs.tech/',
            label: 'Main Site',
            position: 'right',
          },

          {
            href: 'https://store.upsidedownlabs.tech/',
            label: 'Store',
            position: 'right',
          },
          {
            href: 'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'BioAmp Hardware',
                to: '/docs/category/BioAmp-Hardware',
              },
              {
                label: 'BioAmp Software',
                to: '/docs/category/BioAmp-Software',

              },
              {
                label: 'Experiments',
                to: '/docs/category/Experiments',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://youtube.com/upsidedownlabs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/myupsidedownlab',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/upsidedownlabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
              },
              {
                label: 'Website',
                href: 'https://upsidedownlabs.tech/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Upside Down Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
