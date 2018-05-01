module.exports = {
  siteMetadata: {
    title: 'Василий Кузенков',
    author: 'Vassiliy Kuzenkov',
    description: 'My little blog for easy reading.',
    siteUrl: 'https://blog.bondiano.xyz',
    vkLink: 'https://vk.com/bondian0',
    tgLink: 'https://telegram.me/bondian0'
  },
  pathPrefix: '/blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 595,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bondiano Blog",
        short_name: "Blog",
        start_url: "/",
        background_color: "#fffff",
        theme_color: "#fffffff",
        display: "minimal-ui",
        icon: "/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography',
      },
    },
  ],
}
