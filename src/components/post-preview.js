import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1em;
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

const PostPreview = (props) => {
  return (
    <Wrapper>
      <Header>
        <Date>{props.date}</Date>
        <Separator>·</Separator>
        <Tag>{props.tag}</Tag>
      </Header>
      <Link to={props.slug}>
        <Title>{props.title}</Title>
      </Link>
    </Wrapper>
  );
};

export default PostPreview;
