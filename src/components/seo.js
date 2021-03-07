import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{ lang: `es` }}
      title={title}
      titleTemplate={`${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ]}
    />
  );
};

export default SEO;
