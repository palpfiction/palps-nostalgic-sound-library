import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Tag } from "../components";

const TagList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2em 1em;
  width: 100%;

  @media screen and (min-width: 720px) {
    max-width: 600px;
  }
`;
const Tags = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark {
        group(field: frontmatter___tag) {
          fieldValue
        }
      }
    }
  `);

  return (
    <TagList>
      {data.allMarkdownRemark.group.map((tag) => (
        <li key={tag.fieldValue}>
          <Tag tag={tag.fieldValue} />
        </li>
      ))}
    </TagList>
  );
};

export default Tags;
