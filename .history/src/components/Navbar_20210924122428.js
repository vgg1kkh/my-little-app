import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          copyright
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <div className="left">
        <div>
        <img src="/logo.jpg" style={{height:'50px',width:'50px',borderRadius:'5px'}} 
        alt="logo"></img>
        </div>        
        <h1>{title}</h1>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Porfolio Projects</Link>
      </div>
    </nav>
  )
}
