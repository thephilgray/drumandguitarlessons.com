import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Image from './image'
import SiteNav from './SiteNav'

const StyledLogo = styled.div`
  margin: 0;
  grid-area: logo;
`

const Header = ({ siteTitle }) => (
  <>
    <StyledLogo>
      <Link to="/">
        <Image alt={siteTitle} />
      </Link>
    </StyledLogo>
    <SiteNav />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
