import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>pAgE nOt fOUnD.......</h1>
      <h3>
        <Link to="/">hEaD bACk hOme!!!!</Link>
      </h3>
    </Layout>
  )
}

export default NotFound
