import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FooterSyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={FooterSyles.footer}>
      <h3>written by {data.site.siteMetadata.author} © 2020</h3>
    </footer>
  )
}
export default Footer
