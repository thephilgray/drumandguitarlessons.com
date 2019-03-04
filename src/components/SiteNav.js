import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ColorBox from './ColorBox'

const StyledSiteNavWrapper = styled.div`
  width: 100%;
  grid-area: nav;
`

const StyledNav = styled.nav`
  /* width: 80vw;
  transform: translateX(-10vw); */
  text-align: center;
  width: 100%;
  a {
    text-decoration: none;
    text-align: center;
    width: 100%;
  }
`

const StyledNavButton = styled(ColorBox)`
  text-align: center;
  width: 100%;
`

export default function SiteNav() {
  return (
    <StyledSiteNavWrapper>
      <ColorBox
        backgroundColor="mediumBlue"
        borderColor="darkBlue"
        gradientBorder
      >
        <StyledNav>
          <Link to="/about">
            <StyledNavButton backgroundColor="red">Enroll</StyledNavButton>
          </Link>
          <Link to="/contact">
            <StyledNavButton backgroundColor="purpleGradient">
              About
            </StyledNavButton>
          </Link>
          <Link to="/contact">
            <StyledNavButton backgroundColor="purpleGradient">
              Contact
            </StyledNavButton>
          </Link>
        </StyledNav>
      </ColorBox>
    </StyledSiteNavWrapper>
  )
}
