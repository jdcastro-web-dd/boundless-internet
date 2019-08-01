import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../templates/layout';
import IntroBanner from '../components/indexPage/IntroBanner';
import Banner1 from '../components/indexPage/Banner1';

// TODO get rid of index.js and generate with template and gatsby-node

const Index = ({ data }) => {
  return (
    // <Layout> includes header banner and navigation
    <Layout data={data.contentfulPageHeader}>
      <IntroBanner />
      <Banner1 />
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const INDEX_QUERY = graphql`
  query INDEX_QUERY {
    contentfulPageHeader(id: { eq: "d15d7293-a259-5625-93be-799772cc9813" }) {
      id
      pageTitle
      isHomePage
      headline
      backgroundImage {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
