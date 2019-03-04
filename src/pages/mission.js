import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const CONTENT_PAGE = graphql`
  query CONTENT_PAGE {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/mission.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

const MissionPage = () => (
  <StaticQuery
    query={CONTENT_PAGE}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <h1>{node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))
    }
  />
)

export default MissionPage
