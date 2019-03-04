import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ColorBox from './ColorBox'

const StyledTagline = styled.div`
  grid-area: tagline;
`

function Tagline({ siteDescription }) {
  return (
    <StyledTagline>
      <ColorBox backgroundColor="mediumBlue" borderColor="darkBlue">
        <p>{siteDescription}</p>
      </ColorBox>
    </StyledTagline>
  )
}

Tagline.propTypes = {
  siteDescription: PropTypes.string.isRequired,
}

export default Tagline
