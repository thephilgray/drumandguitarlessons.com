import React from 'react'
// import { Link } from "gatsby"
import styled from 'styled-components'

import drums from '../images/drums.png'

import Layout from '../components/layout'
import SEO from '../components/seo'

// const StyledTagline = styled.div`
//   background: ${({ theme }) => theme.mediumBlue};
//   color: ${({ theme }) => theme.white};
//   border-left: ${({ theme }) => `10vw solid ${theme.darkBlue}`};
//   padding: 1em;
//   font-weight: bold;
//   display: flex;
//   align-items: center;

//   p {
//     margin: 0;
//     padding: 0;
//   }
// `

const StyledContent = styled.div`
  background-image: url(${drums});
  background-position: right;
  background-size: cover;
  color: ${({ theme }) => theme.white};
  min-height: 50vh;
  /* display: flex; */
  /* align-items: flex-end; */
  position: relative;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledContent>
      <p>Homepage content......</p>
    </StyledContent>
  </Layout>
)

export default IndexPage
