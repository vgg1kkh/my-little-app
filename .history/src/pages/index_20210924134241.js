import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from 'gatsby-image'

export default function Home({data}) {
  console.log("GatsbyImageSharpFluid=",data);
  return (
    <>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>Drawing</h2>
            <h3>Photographing & Painting</h3>
            <h4>Landscapes Animals & Plants</h4>
            <Link className={styles.btn} to="/projects">
              Porfolio
            </Link>
          </div>
          <div className=
          <Img  fluid={data.file.childImageSharp.fluid}/>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`query banner {
  file(relativePath: {eq: "banner.jpg"}) {
    id
    childImageSharp {
      fluid (maxWidth:600){
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

