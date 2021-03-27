import { graphql } from "gatsby";
import * as React from "react";
import { Layout, SEO, Header, Tags } from "../components";
import PostPreview from "../components/post-preview";

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="palp's nostalgic sound library" />
      <Layout>
        <Header />
        <Tags />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview
            {...node.frontmatter}
            excerpt={node.excerpt}
            key={node.frontmatter.slug}
          />
        ))}
      </Layout>
    </>
  );
};

export const PageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY", locale: "es")
            tag
            cover
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default IndexPage;
