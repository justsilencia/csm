import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const CreditLibrary = () => {
    return (
        <>
        <Layout>
        <SEO title="Credit Library" />
        <div class="container">
            <div class="col-lg-auto my-6">
                <div class="card wlgscreen-75 m-auto">
                    <div class="card-body text-center">
                        <StaticImage src="../images/Logo.png" id="image3" alt="Credit score maestro logo." />
                        <h1>Credit Research Library</h1>
                    </div>
                    <div class="card-footer">
                        &nbsp;&nbsp;&nbsp;&nbsp;Our credit research library is a compilation of what we consider to be some of the most useful information
                        available in the industry. Whether you're a consumer looking to better your understanding of credit, or an
                        attorney looking to research the relevant law, this library is for you.
                    </div>
                </div>
            </div>
        </div>  
        </Layout>
        </>
    );
};

export default CreditLibrary;