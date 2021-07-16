import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import "../components/css/CSMLanding.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container">

      <div class="row my-6">
        <div class="col-lg-6">
          <p class="landingstatement">
              <span class="letterstyle1">Providing you with the</span> <span class="letterstyle2">KNOWLEDGE AND TOOLS YOU</span> 
              <span class="letterstyle3">need</span> <span class="letterstyle4">&nbsp;to build and maintain a WINNING CREDIT SCORE.</span>
          </p>
       <div class="checkcomments">
           <div class="commentbox">
            <table>
                <tr>
                    <td></td>
                    <td>
                        <div class="comment">
                            First, obtain a credit report from each of the three reporting agencies.
                        </div>
                    </td>
                </tr>
            </table>
            </div>
            <div class="commentbox">
            <table>
                <tr>
                    <td></td>
                    <td>
                        <div class="comment">
                            Second, use the knowledge we offer to reverse any negative aspects of your credit.
                        </div>
                    </td>
                </tr>
            </table>
            </div>
         </div>
        </div>
          <div class="col-lg-3">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">
                        Credit Calculator
                    </h3>
                    
                    <br />
                    <div class="card-text blog-description-text">
                        Download our free credit repair and debt calculator.
                    </div>
                </div>
                <div class="card-footer">
                    
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">
                        Our Credit Book
                    </h3>
                    <div class="card-text blog-description-text">
                        Unlike most credit repair "pros," Credit Score Maestro treats more than the symptom of bad credit.
                        Our 
                        credit repair book
                        leads the industry in explaining how building credit really works.
                    </div>
                </div>
                <div class="card-footer">
                    
                </div>
            </div>
        </div>
        
        
        </div>
    </div>
    <div class="row mb-3 bg-info p-3 mr-0 ml-0">
        <div class="card border-0 h-75 reviews w-cta bg-info">
            <p class="text-white m-0 bg-info">
            "Clear and concise. An easy to use guide that allowed me to take control of 
                my credit score. A real home run!" <span class="reviewname">Michael Williams, GA</span>
            </p>
            <StaticImage className="home-book-img" 
                alt="Credit repair book." 
                src="../images/Front-Cover-400x600.jpg" id="BookImg" />
        </div>
        <div class="col-3 ml-5 mt-2">
            <Link to="https://www.amazon.com/Winning-Credit-Score-Game-Complete/dp/0999415301/" className="btn btn-cta btn-cta-lgscreen">
                Buy Our Book!
            </Link>
        </div>
    </div>
  </Layout>
)

export default IndexPage
