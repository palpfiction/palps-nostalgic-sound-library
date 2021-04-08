import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Tag } from "../components";

const Container = styled.div`
  margin-bottom: 4em;
  display: flex;
`;

const Title = styled.h1`
  font-family: var(--sans-serif);
  margin-top: 0.2em;
  margin-bottom: 0;

  @media screen and (max-width: 720px) {
    font-size: 1.2em;
  }

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

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const BodyContainer = styled.div`
  flex: 1 1 75%;
`;

const PostPreview = (props) => {
  const cover = getImage(props.cover);

  return (
    <Container>
      {cover ? (
        <GatsbyImage
          image={cover}
          alt={props.title}
          objectFit={"contain"}
          css={`
            flex: 1 1 25%;
            margin-right: 1.5em;
          `}
        />
      ) : null}
      <BodyContainer>
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
      </BodyContainer>
    </Container>
  );
};

export default PostPreview;
