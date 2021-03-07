import { Link, graphql } from "gatsby";
import * as React from "react";
import { Layout, SEO, Header, Tags } from "../components";
import PostPreview from "../components/post-preview";

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges);
  return (
    <>
      <SEO title="palp's nostalgic sound library" />
      <Layout>
        <Header />
        <Tags />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.frontmatter.slug}>
            <PostPreview {...node.frontmatter} />
          </Link>
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
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
