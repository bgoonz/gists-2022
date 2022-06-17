import React from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout'
import SEO from './Seo'

export default function Page({ data: { page }}) {
  return (
    <Layout>
        <SEO data={page.seo}/>
        <h1>{page.title}</h1>   
        <div dangerouslySetInnerHTML={{ __html: page.subtitle }}></div>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($pageId: String!) {
    page: graphCmsPage(id: { eq: $pageId }) {
      title
      subtitle
      seo {
        title
        keywords
        description
        noIndex
      }
    }
  }
`