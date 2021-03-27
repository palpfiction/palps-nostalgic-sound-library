import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Layout, Header, SEO, Tag } from "../components";

const Container = styled.div`
  margin: 1em auto;
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
      }
    }
  }
`;

export default Entry;
