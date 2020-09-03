import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';


import SEO from '../components/seo';
import Footer from '../components/footer';
function Index(props) {
  const { data } = props;
  return (
    <div className="bg-gray-100 px-4 min-h-screen flex flex-col justify-between">
      <SEO
        title="Full-stack Web Developer"
        keywords={[`javascript`, `react`, `Full-stack Web Developer`, `gatsby`]}
      />
      {/* <Navigation {...props} /> */}
      <div className="flex-1 flex flex-col text-gray-800 justify-center items-center sm:w-3/4 sm:mx-auto">
        <div className="flex flex-col z-10">
          <h1 className="text-2xl sm:text-5xl text-gray-800">
            Hello, I'm <span className="text-orange-500">Chris Ellis</span>
          </h1>
          <p className="mt-4 ml-4 sm:text-4xl">I'm a Fullstack Web Developer and Freelancer. I'm currently in Raleigh, NC.</p>
          <p className="mt-4 ml-4 sm:text-4xl">
            I build <Link className="inline-block text-gray-500 hover:text-gray-600 active:text-gray-600" to="/projects">things</Link>, and I'm trying to <Link className="inline-block text-gray-500 hover:text-gray-600 active:text-gray-600" to="/blog">write</Link> more.
          </p>
          <p className="mt-4 ml-4 sm:text-4xl">
            I've also been <a href="https://www.twitch.tv/chrisellisdev" className="inline-block text-gray-500 hover:text-gray-600 active:text-gray-600">streaming</a> lately. <br />(Also <a href="https://www.youtube.com/channel/UCaGN_4TNAclDKKDwqVHzj7g" className="inline-block text-gray-500 hover:text-gray-600 active:text-gray-600">here</a>.)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Index.propTypes = {
  data: PropTypes.object
};

export default Index;
export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    posts: allSanityPost(limit: 6, sort: {fields: [publishedAt], order: DESC}) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`