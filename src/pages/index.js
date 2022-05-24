import * as React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    // <main>
    //   <title>Home Page</title>
    //   <h1>Welcome to Hello Gatsby Shwe Aye</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by folliwing the Gatsby Tutorial.</p>
    // </main>
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage