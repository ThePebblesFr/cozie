module.exports = {
  title: "Cozie An iOS application for IEQ and physiological data collection",
  tagline: "Allows building occupants to provide feedback in real time",
  url: "https://cozie.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "cozie-app", // Usually your GitHub org/user name.
  projectName: "cozie", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Cozie",
      logo: {
        alt: "Cozie Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/cozie-app/cozie",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://cozie-apple.app",
          label: "Cozie Apple",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "BUDS Lab",
              href: "https://www.budslab.org",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Cozie Repo",
              href: "https://github.com/cozie-app/cozie",
            },
            {
              label: "Cozie Apple Repo",
              href: "https://github.com/cozie-app/cozie-apple",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cozie, National University of Singapore, BUDS Lab. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ThePebblesFr/cozie/tree/master/my-website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: 'UA-151445384-5',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
