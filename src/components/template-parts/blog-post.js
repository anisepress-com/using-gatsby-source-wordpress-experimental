import React from "react"

import { Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import Img from "gatsby-image"

import Layout from "../../components/layout"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  return (
    <Layout>
      <Heading as="h1" size="xl" mb={5}>
        {title}
      </Heading>

      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
        <Box mb={5}>
          <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
        </Box>
      )}

      <p dangerouslySetInnerHTML={{ __html: content }} />

      <br />
      {!!nextPage && <Link to={nextPage.uri}>Next: {nextPage.title}</Link>}
      <br />
      {!!previousPage && (
        <Link to={previousPage.uri}>Previous: {previousPage.title}</Link>
      )}
    </Layout>
  )
}

export default BlogPost
