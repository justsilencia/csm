import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogsPage = () => {

    const data = useStaticQuery(
        graphql`
            query{
                allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                    edges {
                      node {
                        id
                        publishedDate
                        excerpt {
                          excerpt
                        }
                        title
                      }
                    }
                  }
            }
        `
    )
    //const data = [];

  

    return (
        <Layout>
          <SEO title="Blog" />
          <br /><br /><br />
          <h1>Articles</h1>
          {data.allContentfulBlogPost.edges.map(edge => {
              return (
                <div>
                    { edge.node.title }
                </div>
              )
          })}
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/">Go home</Link>
        </Layout>
      )
} 

export default BlogsPage