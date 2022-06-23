import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
 
export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)
 
export const query = graphql`
  query {
    file(relativePath: { eq: "blog/avatars/example.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
