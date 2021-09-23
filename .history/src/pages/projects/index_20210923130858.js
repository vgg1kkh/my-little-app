import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"

export default function Index({ data }) {
  console.log(data)
  console.log(data.site.siteMetadata.contact)
  const thumb_img = data.projects.nodes
  console.log(thumb_img)
  const projects = data.projects.nodes
  const contact = data.site.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Porfolio</h2>
        <h3>Various of painting that I created</h3>
        <div className={styles.projects}>
          {projects.map(i => (
            <Link to={"/projects/" + i.frontmatter.slug} key={i.id}>
              <div className={styles.i}>
                <div>
                  <Img fluid={i.frontmatter.thumb.childImageSharp.fluid} />
                </div>
                <h3>{i.frontmatter.title}</h3>
                <p>{i.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>If you want to share your comments, contact me by {contact}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query project {
    site {
      siteMetadata {
        contact
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
