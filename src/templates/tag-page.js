import React from "react";
import { Link, graphql } from "gatsby";

const TagPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map((post) => (
    <li key={post.node.frontmatter.slug}>
      <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
    </li>
  ));

  return postLinks;
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
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tag
          }
        }
      }
    }
  }
`;

export default TagPage;
