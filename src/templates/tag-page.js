import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO, Header, Tags, PostPreview } from "../components";

const TagPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <SEO title="Tags" />
      <Layout>
        <Header />
        <Tags active={pageContext.tag} />
        {posts.map((post) => (
          <PostPreview
            {...post.node.frontmatter}
            excerpt={post.node.excerpt}
            key={post.node.frontmatter.slug}
          />
        ))}
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tag: { eq: $tag } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "es")
            slug
            title
            tag
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default TagPage;
