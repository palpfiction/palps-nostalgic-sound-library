import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { slugify } from "../utils/slugify";

const Container = styled.div`
  margin-bottom: 3em;
`;

const Title = styled.h1`
  font-family: var(--sans-serif);
  margin-top: 0.2em;
`;

const Header = styled.div`
  font-size: 0.8em;
  padding: 0;
`;

const Date = styled.span`
  font-style: italic;
  color: var(--grey);
`;

const Tag = styled.span`
  font-style: italic;
  color: var(--primary);
`;

const Separator = styled.span`
  padding: 0 0.3em;
`;

const Excerpt = styled.p`
  color: var(--grey);
`;

const PostPreview = (props) => {
  return (
    <Container>
      <Header>
        <Date>{props.date}</Date>
        <Separator>·</Separator>
        <Tag>
          <Link to={`/tags/${slugify(props.tag)}`}>{props.tag}</Link>
        </Tag>
      </Header>

      <Title>
        <Link to={props.slug}>{props.title}</Link>
      </Title>

      <Excerpt>{props.excerpt}</Excerpt>
    </Container>
  );
};

export default PostPreview;
