import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
      <Layout>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h1>
                {node.frontmatter.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/2-Aujourdhui.md/"}}) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        
                    }
                }
            }
        }
    }
`