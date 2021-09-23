import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import * as styles from "../styles/project-detail.module.css"

export default function ProjectDetails({ data }) {
  // console.log(data);
  const { html } = data.markdownRemark
  const { title, stack, featuredImg, date } = data.markdownRemark.frontmatter
  // console.log(featuredImg,stack);
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <h4>{date}</h4>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link className={styles.btn} to="/projects">
          Go Back
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        date
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
