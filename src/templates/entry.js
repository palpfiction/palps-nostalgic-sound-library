import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout, Header, SEO, Tag } from "../components";

const Container = styled.div`
  margin: 1em auto;
  display: flex;
  flex-direction: column;

  iframe {
    margin-top: 2em;
  }
`;

const EntryHeader = styled.div`
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

const Title = styled.h1`
  font-family: var(--sans-serif);
  margin-top: 0.2em;
`;

const EntryContent = styled.div`
  line-height: 1.5em;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;

  p:first-of-type {
    ::first-letter {
      color: var(--primary);
      font-size: 3em;
      text-transform: capitalize;
    }
  }

  blockquote {
    color: var(--grey);

    p:first-of-type {
      ::first-letter {
        color: inherit;
        font-size: inherit;
        text-transform: inherit;
      }
    }
  }
`;

const Entry = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const cover = getImage(frontmatter.cover);

  return (
    <>
      <SEO title={frontmatter.title} />
      <Layout>
        <Header />
        <Container>
          <EntryHeader>
            <Date>{frontmatter.date}</Date>
            <Separator>·</Separator>
            <TagStyle>
              <Tag tag={frontmatter.tag}></Tag>
            </TagStyle>
          </EntryHeader>
          <Title>{frontmatter.title}</Title>
          {cover ? (
            <GatsbyImage
              image={cover}
              alt={frontmatter.title}
              css={`
                margin: 0 auto;
                border-radius: 6px;
              `}
            />
          ) : null}

          <EntryContent
            dangerouslySetInnerHTML={{ __html: html }}
          ></EntryContent>
        </Container>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "es")
        slug
        title
        tag
        cover {
          childImageSharp {
            gatsbyImageData(
              width: 400
              aspectRatio: 1
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 80
            )
          }
        }
      }
    }
  }
`;

export default Entry;
