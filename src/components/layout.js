import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, nav, siteTitle, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
import Footer from "../components/footer.js"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: { eq: "contact-us" }) {
        contactUsFields {
            address
            city
            zipCode
            facebook
            instagram
        }
      }
    }
  `)

  return (
    <>
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
        <nav className={nav}>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <ul className={navLinks}>
            <li></li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/artists">
                Artists
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactUsFields}
      />
    </>
  )
}

export default Layout