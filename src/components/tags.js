import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Tag } from "../components";

const TagList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 2em 1em;
  width: 100%;

  @media screen and (min-width: 720px) {
    max-width: 600px;
  }
`;

const TagStyle = styled.li`
  margin: 0.5em;
  a,
  a:visited {
    ${({ active }) =>
      active &&
      `
    color: var(--grey);
    pointer-events: none;
  `}
  }
`;

const Tags = ({ active }) => {
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
        <TagStyle active={active === tag.fieldValue} key={tag.fieldValue}>
          {active === tag.fieldValue}
          <Tag tag={tag.fieldValue} />
        </TagStyle>
      ))}
    </TagList>
  );
};

export default Tags;
