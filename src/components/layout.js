import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
// import ColorBox from './ColorBox'
import Tagline from './Tagline'
import './layout.css'

const theme = {
  darkBlue: `#094FFF`,
  mediumBlue: `#097aff`,
  white: `#fff`,
  red: `#AA2A00`,
  purpleGradient: `linear-gradient(90deg, #BC7AFF 11.31%, #094FFF 98.42%)`,
  bgGradient: `linear-gradient(to top, #434343 0%, black 100%)`,
}

const StyledPage = styled.div`
  background-image: ${props => props.theme.bgGradient};
`

const StyledFooter = styled.footer`
  text-align: center;
  color: #fff;
`

const StyledGrid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    'logo logo'
    'tagline tagline'
    'main main'
    'nav nav';
`

const StyledMain = styled.main`
  grid-area: main;
`

const detailsQuery = graphql`
  query TaglineQuery {
    site {
      siteMetadata {
        title
        description
        copyright
      }
    }
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <StaticQuery
        query={detailsQuery}
        render={data => (
          <>
            <StyledGrid>
              <Header siteTitle={data.site.siteMetadata.title} />
              <Tagline siteDescription={data.site.siteMetadata.description} />
              <StyledMain>{children}</StyledMain>
            </StyledGrid>
            <StyledFooter>
              <p>{data.site.siteMetadata.copyright}</p>
            </StyledFooter>
          </>
        )}
      />
    </StyledPage>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
