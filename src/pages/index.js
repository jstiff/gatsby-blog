import React from "react"
import "../styles/index.scss"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Head title="Home" />
        <h3>This blog explores the universe of Architecture</h3>
      </Layout>
    </>
  )
}

export default IndexPage
