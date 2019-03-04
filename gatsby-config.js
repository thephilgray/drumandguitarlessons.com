const year = new Date().getFullYear()

module.exports = {
  siteMetadata: {
    title: `DrumandGuitarLessons.com`,
    description: `Professional music lessons in the Huntington Beach area, available in-home or in our studio.`,
    keywords: [
      `drum lessons`,
      `drum studio`,
      `guitar lessons`,
      `bass guitar`,
      `keyboard lessons`,
      `private mobile lessons`,
      `private studio lessons`,
      `3 hour tour studios`,
      `group lessons`,
      `green valley homeowners recreation association`,
      `fountain valley`,
      `orange county`,
      `music school`,
    ],
    author: `@thephilgray`,
    copyright: `© ${year} 3 Hour Tour Studios at drumandguitarlessons.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
