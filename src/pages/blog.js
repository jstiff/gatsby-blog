import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blogs" />
      <h2>Architecture Blog</h2>
      <ol className={BlogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(post => {
          return (
            <li className={BlogStyles.post}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
