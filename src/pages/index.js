import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Welcome to Sleurs Agency"}>
      <p>Lorem ipsum</p>
      <StaticImage 
        alt="randomized unsplash image"
        src="../images/example.png"
      />
      </Layout> 
    </main>
  )
}
export default IndexPage