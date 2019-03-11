'use strict'

module.exports = {
  siteMetadata: {
    title: "un{code}ference.io '19",
    description: 'The software engineering unconference on May 10th, in the heart of Tyrol (Austria)',
    siteUrl: 'https://uncodeference.io',
    author: {
      name: 'Bernhard Mayr',
      url: 'https://twitter.com/bemayr',
      email: 'bernhard@mayr.io'
    },
    twitter: `@uncodeference`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `un{code}ference.io '19`,
        short_name: `uncodeference`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#73CA88`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `minimal-ui`,
        icon: `src/assets/logo.inverted.png`, // This path is relative to the root of the site.
        include_favicon: true // Include favicon
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://uncodeference.io'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
