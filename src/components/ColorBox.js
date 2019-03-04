import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledColorBox = styled.div`
  position: relative;
  width: 100%;
  background: ${({ backgroundColor, theme }) => theme[backgroundColor]};
  color: ${({ theme }) => theme.white};
  border-left: ${({ theme, borderColor }) =>
    `10vw solid ${theme[borderColor]}`};
  padding: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;

  ${({ gradientBorder, backgroundColor, borderColor, theme }) =>
    gradientBorder
      ? `background-image: linear-gradient(to right, ${
          theme[borderColor]
        } 10%, ${theme[backgroundColor]} 10%, ${
          theme[backgroundColor]
        } 100%); border: none;`
      : ''}

  p {
    margin: 0;
    padding: 0;
  }
`

function ColorBox({ backgroundColor, borderColor, gradientBorder, children }) {
  return (
    <StyledColorBox
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      gradientBorder={gradientBorder}
    >
      {children}
    </StyledColorBox>
  )
}

ColorBox.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  gradientBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

ColorBox.defaultProps = {
  backgroundColor: `darkBlue`,
  borderColor: `white`,
  gradientBorder: false,
}

export default ColorBox
