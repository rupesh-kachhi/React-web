import * as React from "react";
import cx from "classnames";
import home from "../images/undraw_taking_notes_tjaf.svg";
import branding from "../images/noun_branding_1885335.svg";
import processing from "../images/noun_The Process_1885341.svg";
import modeling from "../images/noun_3d modeling_1885342.svg";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const StyledButton = ({ className, children, ...props }) => {
  className = cx(
    "py-2 px-4 bg-indigo-700 hover:bg-indigo-600 text-base text-white font-bold uppercase rounded shadow-md hover:-translate-1",
    className
  );
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

const Service = ({ title, url, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <Link
        to={url}
        className="text-2xl text-indigo-700 hover:text-indogo-600 hover:underline"
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
};

function Index({ data }) {
  const services = data.services.edges;

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      {/* Logo to be put in url(${home}) */}
      <div
        className="min-h-screen pt-24 sm:pt-32 md:pt-64 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 mb-20 bg-size-5/6 md:bg-size-4/5 lg:bg-size-2/3 bg-right-top bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="w-4/5 md:w-3/4 lg:w-7/12 mt-20 font-serif font-hairline self-start">
          <h1 className="text-3xl md:text-5xl text-indigo-700 leading-tight">
            Sumati - A Software Solutions Company.
          </h1>
          <p className="text-base">
            We provide innovative IT solutions for your business.
          </p>
        </div>

        <div className="container w-3/4 sm:w-7/12 lg:w-5/12 xl:1/4 mt-10 self-start">
          <div
            className="bg-white rounded flex flex-col sm:flex-row items-start sm:items-center text-sm p-4"
            style={{
              boxShadow:
                "0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)",
            }}
          >
            <div className="flex-1">
              <p>
                <strong>Phone: </strong>
                +91 1234567890
              </p>
              <p>
                <strong>Email: </strong>
                contact@sumati.io
              </p>
            </div>
            <div className="flex-initial mt-6 sm:mt-0">
              <Link to="/contact">
                <StyledButton>Contact</StyledButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Our Services
          </p>

          <div className="flex flex-wrap">
            {services.map(({ node }) => (
              <Service
                title={node.frontmatter.title}
                url={node.frontmatter.path}
                key={node.frontmatter.path}
              >
                {node.excerpt}
              </Service>
            ))}
          </div>

          <div className="self-center mt-8">
            <Link to="/services">
              <StyledButton>View all services</StyledButton>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-16">
          <p className="mb-2 text-4xl text-gray-800 self-center">
            Our Features
          </p>

          <div className="flex flex-wrap justify-center items-stretch -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="branding" src={branding} />
                </div>
                <p className="text-2xl w-full">Continuous Innovation</p>
                <p>
                  Staying ahead with the latest technologies and innovative
                  solutions.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="processing" src={processing} />
                </div>
                <p className="text-2xl w-full">Scalable Solutions</p>
                <p>
                  Flexible and scalable IT solutions to support your business
                  growth.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={modeling} />
                </div>
                <p className="text-2xl w-full">Agile Development</p>
                <p>
                  Adaptive development approach for on-time and on-budget
                  project delivery.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={modeling} />
                </div>
                <p className="text-2xl w-full">Robust Security</p>
                <p>
                  Advanced security measures to protect your systems and data.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={modeling} />
                </div>
                <p className="text-2xl w-full">Ongoing Support</p>
                <p>
                  Dedicated support and maintenance services for optimal system
                  performance.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mt-2">
              <div className="h-full m-2 p-4 border-2 border-gray-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img alt="modeling" src={modeling} />
                </div>
                <p className="text-2xl w-full">Collaborative Approach</p>
                <p>
                  Open communication and transparent processes for effective
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/services/" } }
      sort: { frontmatter: { date: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
