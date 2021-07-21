/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./css/bootstrap.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [isToggled, setIsToggled] = useState(false);
  const toggle = React.useCallback(() => setIsToggled(!isToggled));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
      <div className="container">
          <Link className="navbar-brand homelink" to="/">
            <StaticImage alt="Logo" src="../images/Logo-Trans.png" width={25} id="BookImg" />
            <h1>Credit Score Maestro</h1>
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-4">
            <li className="nav-item mr-4">
              <Link className="nav-link bg-info" to="/signup/">
                Sign Up
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link bg-info" to="/blog/">
                Credit Library
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link bg-info" to="/blog/">
                Credit Forms
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link bg-info" to="/blog/">
                Maestro's Blog
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link bg-info" to="/blog/">
                Credit Q & A
              </Link>
            </li>
            <li className={(isToggled===true)? "nav-item dropdown show" : "nav-item dropdown"}>
                <a onClick={toggle} className="nav-link bg-info dropdown-toggle" data-toggle="dropdown" href="#">
                    About Us
                </a>
                <ul className={(isToggled===true)? "dropdown-menu show" : "dropdown-menu"}>
                    <li className="dropdown-item">
                      <Link className="nav-link bg-info" to="/blog/">
                        Mission
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link className="nav-link bg-info" to="/contactus">
                        Contact
                      </Link>
                    </li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <div>
          <main>
            {children}
          </main>
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">
                &nbsp;&nbsp;<Link to="/TermsOfUse" id="HyperLink1">Terms of Use</Link>&nbsp;&nbsp; | 
                &nbsp;&nbsp;<Link to="/ContactUs" id="HyperLink2">Contact Us</Link>&nbsp;&nbsp; | 
                &nbsp;&nbsp;<Link to="/AboutUs" id="HyperLink17">About Us</Link>
                &nbsp;&nbsp;© {new Date().getFullYear()}, Credit Score Maestro LLC
              </p>
            </div>
          </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
