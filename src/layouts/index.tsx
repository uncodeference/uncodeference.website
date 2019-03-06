import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import socialMediaImage from '../assets/social-share.jpg'

import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            twitter
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description, siteUrl, twitter }
      }
    }) => (
      <LayoutRoot>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: 'uncodeference, unconference, wattens, werkstätte, conference, software engineering' }
          ]}
        >
          <html lang="en" />
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />

          <meta property="og:url" content={siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={socialMediaImage} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={twitter} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={socialMediaImage} />
        </Helmet>
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
