const { slugify } = require("./src/utils/slugify");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  await createEntries(createPage, graphql, reporter);
  await createTags(createPage, graphql, reporter);
};

const createEntries = async (createPage, graphql, reporter) => {
  const entryTemplate = require.resolve(`./src/templates/entry.js`);

  const entries = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (entries.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  entries.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: entryTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};

const createTags = async (createPage, graphql, reporter) => {
  const tagTemplate = require.resolve(`./src/templates/tag-page.js`);

  const result = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tag) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.group.forEach((tag) => {
    createPage({
      path: `tags/${slugify(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
