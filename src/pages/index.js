import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection';
import Infoblock from '../components/Reusable/Infoblock';
import Dualinfoblock from '../components/Reusable/Dualinfoblock';
import Coursecart from '../components/Cart/Coursecart';
import Bundlecart from "../components/Cart/Bundlecart";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="learncodeonline"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses} />
    <Bundlecart bundles={data.bundles} />
    <Dualinfoblock heading="Our Team" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath:{ eq: "heromain.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges{
        node {
          id
          title
          price
          category
          description {
            description
          }
          image{
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
    bundles: allContentfulBundles{
      edges {
        node {
          id
          title
          price
          image{
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
