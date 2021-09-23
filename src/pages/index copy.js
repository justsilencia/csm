import React from "react";
import { Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import "../components/css/CSMLanding.css";

const IndexPage = () => {
    const landingBlogs = useStaticQuery(
        graphql`
            query{
                allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, filter: {landingArticle: {eq: true}}) {
                  edges {
                    node {
                      id
                      publishedDate
                      excerpt {
                        excerpt
                      }
                      title
                      body {
                        raw
                      }
                      author
                      landingArticle
                    }
                  }
                }
              }
        `
    )

    return (
        <Layout>
          <SEO title="Home" />
          <div className="container">
      
            <div className="row my-6">
              <div className="col-lg-6">
                <p className="landingstatement">
                    <span className="letterstyle1">Providing you with the</span> <span className="letterstyle2">KNOWLEDGE AND TOOLS YOU</span> 
                    <span className="letterstyle3"> need</span> <span className="letterstyle4">&nbsp;to build and maintain a WINNING CREDIT SCORE.</span>
                </p>
             <div className="checkcomments">
                 <div className="commentbox">
                  <table>
                      <tr>
                          <td>
                              <StaticImage className="checkbox-img"
                                  alt="Check box." 
                                  src="../images/check1.png" id="Image2" />
                          </td>
                          <td>
                              <div className="comment">
                                  First, obtain a credit report from each of the three reporting agencies.
                              </div>
                          </td>
                      </tr>
                  </table>
                  </div>
                  <div className="commentbox">
                  <table>
                      <tr>
                          <td>
                              <StaticImage className="checkbox-img"
                                  alt="Check box." 
                                  src="../images/check1.png" id="Image1" />
                          </td>
                          <td>
                              <div className="comment">
                                  Second, use the knowledge we offer to reverse any negative aspects of your credit.
                              </div>
                          </td>
                      </tr>
                  </table>
                  </div>
               </div>
              </div>
                <div className="col-lg-3">
                  <div className="card h-50">
                      <div className="card-body">
                          <h3 className="card-title">
                              Credit Calculator
                          </h3>
                          <div className="card-text blog-description-text">
                              Download our free credit repair and debt calculator.
                          </div>
                      </div>
                      <div className="card-footer">
                      <a href="/static/CSM-Calculator.xlsx" id="CreditCalcLink" className="btn btn-info" download>
                          Click here to Download
                      </a>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="card h-50">
                      <div className="card-body">
                          <h3 className="card-title">
                              Our Credit Book
                          </h3>
                          <div className="card-text blog-description-text">
                              Unlike most credit repair "pros," Credit Score Maestro treats more than the symptom of bad credit.
                              Our&nbsp;
                              <Link to="https://www.amazon.com/Winning-Credit-Score-Game-Complete/dp/0999415301/">
                                  credit repair book
                              </Link>
                              &nbsp;leads the industry in explaining how building credit really works.
                          </div>
                      </div>
                      <div className="card-footer">
                          <a href="/static/Excerpt-Game-Management.pdf" id="CreditCalcLink" className="btn btn-info" download>
                              Read an Excerpt
                          </a>
                      </div>
                  </div>
              </div>
              
              
              </div>
          </div>
          <div className="row mb-3 bg-info p-3 mr-0 ml-0">
              <div className="card border-0 h-75 reviews w-cta bg-info">
                  <p className="text-white m-0 bg-info">
                  "Clear and concise. An easy to use guide that allowed me to take control of 
                      my credit score. A real home run!" <span className="reviewname">Michael Williams, GA</span>
                  </p>
                  <StaticImage className="home-book-img" 
                      alt="Credit repair book." 
                      src="../images/Front-Cover-400x600.jpg" id="BookImg" />
              </div>
              <div className="col-3 ml-5 mt-2">
                  <Link to="https://www.amazon.com/Winning-Credit-Score-Game-Complete/dp/0999415301/" className="btn btn-cta btn-cta-lgscreen">
                      Buy Our Book!
                  </Link>
              </div>
          </div>
          <div class="container">
            <div class="row">
              {
                  landingBlogs.allContentfulBlogPost.edges.map(edge => (
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border-0">
                            <div class="card-body">
                            <h3>
                                { edge.node.title }
                            </h3>
                            </div>
                        </div>
                    </div>
                  ))
              }
            </div>
          </div>
        </Layout>
      )
}

export default IndexPage
