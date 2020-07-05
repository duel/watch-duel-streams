/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import ILayout from './ILayout'

import Header from "../components/Header"
import "../styles/layout.css"

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Duel Studios
        </footer>
      </div>
    </>
  )
}

Layout.defaultProps = {} as Partial<ILayout>

export default Layout

export { default as WatchLayout } from './WatchLayout'
