import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Tag } from "../components";

const Container = styled.div`
  margin-bottom: 3em;
`;

const Title = styled.h1`
  font-family: var(--sans-serif);
  margin-top: 0.2em;

  a,
  a:visited {
    color: var(--black);
    transition: all 0.2s ease-in-out;
  }

  a:hover,
  a:visited:hover {
    color: var(--primary);
  }
`;

const Header = styled.div`
  font-size: 0.8em;
  padding: 0;
`;

const Date = styled.span`
  font-style: italic;
  color: var(--grey);
`;

const TagStyle = styled.span`
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
        <TagStyle>
          <Tag tag={props.tag} />
        </TagStyle>
      </Header>

      <Title>
        <Link to={props.slug}>{props.title}</Link>
      </Title>

      <Excerpt>{props.excerpt}</Excerpt>
    </Container>
  );
};

export default PostPreview;
