import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Meta_Cover from "../images/meta/meta_cover.png"

function SEO() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const title = site.siteMetadata.title
  const description = site.siteMetadata.description
  const author = site.siteMetadata.author

  console.log(site)

  return (
    <Helmet htmlAttributes={{ lang: `en` }} titleTemplate={`${title}`}>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={Meta_Cover} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:url" content="https://marcus-kastner.netlify.app/" /> */}
      <meta name="author" content={author} />
      <meta property="og:type" content="Website" />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
}

export default SEO
