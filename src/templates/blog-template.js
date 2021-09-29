import React from "react";
import ArticleBody from "../components/articleBody";

export default function BlogTemplate({ pageContext }) {

    const {title} = pageContext.blog;
    const {body} = pageContext.blog;

    return (
        <>
            <div className="row">
            {/* Artice */}
            <div className="col-lg-8">
                <div className="card">
                    <article>
                        <header>
                        <div className="card-header">
                            <div className="card-title">
                            <h1>{ title }</h1>
                            </div>
                        </div>
                        <div id="Blog-Image"></div>
                        </header>
                    <div className="card-body blog-article-text">
                        <ArticleBody raw={body.raw} />
                    </div>
                  </article>
                </div>
            </div>

            { /* Sidebar Articles */}
            <div className="col-lg-4">
                {/* Sidebar Article 1 */}
                <div className="card mb-2">
                    <div className="card-header">
                        <h2>Popular Blog Posts</h2>
                    </div>
                    <img className="card-img-top" alt="New Fico Ultra Scoring System - Article image." src="~/Blog/Images/New-FICO-Ultra-Rules.jpg" id="Image7"  />
			        <div className="card-body">
                        <small className="post_meta">By R. David Michaels - Published Dec 4, 2018</small>
				        <div className="card-title">
                            <a className="article-link" href="~/Blog/2018/The-New-FicoUltra-Credit-Scoring-System-What-It-Means-For-You.aspx" id="HyperLink15" >
                                THE NEW FICO ULTRA SCORING SYSTEM: WHAT IT MEANS FOR YOU
                            </a>
					    </div>
			        </div>
                </div>
                {/* Sidebar Article 2 */}
                <div className="card">
                    <div className="card-body">
                            <img className="card-img-top" alt="Article image." src="~/Blog/Images/Tump-Legal-Technique.jpg" id="Image2"  />
                            <small className="post_meta">By R. David Michaels - Nov 5, 2018</small>
						    <div className="card-title">
                                <a className="article-link" href="~/Blog/2018/Learn-Trumps-Technique-to-Delay-Bill-Payments-Without-Credit-Damage.aspx" id="HyperLink9" >
                                    LEARN TRUMP'S TECHNIQUE TO DELAY BILL PAYMENTS WITHOUT CREDIT DAMAGE
                                </a>
						    </div>
					</div>
                </div>

                {/* Sidebar Article 3 */}
                <div className="card mt-3">
                    <img className="card-img-top" alt="Tips to Protect Your Credit Report Information - Article image." src="~/Blog/Images/Credit-Card-Fraud.jpg" id="Image1"  />
					<div className="card-body">
						<div className="card-title mb-0">
                            <a className="article-link" href="~/Blog/2018/Tips-To-Protect-Your-Credit-Report-Information.aspx" id="HyperLink10" >
                                TIPS TO PROTECT YOUR CREDIT REPORT INFORMATION
                            </a>
						</div>
                        <small className="post_meta">By R. David Michaels - Published Aug 2, 2018</small>
					</div>
                </div>

                {/* Sidebar Article 4 */}
                <div className="card mt-3">
                    <img className="card-img-top" alt="Place Freezes on Your Credit Reports - Article image." src="~/Blog/Images/Freeze-Credit.jpg" id="Image5"  />
				<div className="card-body">
                    <small className="post_meta">By R. David Michaels - Oct 30, 2018</small>
					<div className="card-title">
                        <a className="article-link" href="~/Blog/2018/Protect-Yourself-Place-Credit-Freezes-on-Credit-Reports.aspx" id="HyperLink11" >
                            PROTECT YOURSELF: PLACE CREDIT FREEZES ON YOUR CREDIT REPORTS
                        </a>
					</div>
				</div>
                </div>

                {/* Sidebar Article 5 */}
                <div className="card mt-3">
                    <img className="card-img-top" alt="Article image." src="~/Blog/Images/Half-Truths.jpg" id="Image3"  />
				    <div className="card-body">
                        <small className="post_meta">By R. David Michaels - Oct 20, 2018</small>
					    <div className="card-title">
                            <a className="article-link" href="~/Blog/2018/Fact-or-Half-Truth-Timely-Bill-Payment-Increases-Your-Credit-Score.aspx" id="HyperLink8" >
                                FACT OR HALF TRUTH: TIMELY BILL PAYMENT INCREASES YOUR CREDIT SCORE
                            </a>
					    </div>
				    </div>
                </div>

                <div id="blog-sidebar"></div>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-body blog-article-text">
                        <em>
                            To learn more about current credit building strategies and rules, and how they effect you as a 
                            consumer, stay up-to-date by 
                            <a href="~/Blog/Blog-Home.aspx" id="HyperLink1" >
                                reading more on our blog.
                            </a>
                        </em>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}