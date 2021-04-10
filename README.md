<h1 align="center">
  palp's nostalgic sound library
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/dbbb8cd4-2624-4fd7-b567-11aa55abab09/deploy-status)](https://app.netlify.com/sites/palpsnostalgicsoundlibrary/deploys)

My personal nostalgia library. Developed from scratch with Gatsby 3. It is a very simple static website which could be useful to start tinkering with Gatsby (which has been nothing but bliss so far).

The blog pages are generated from markdown documents thanks to the `gatsby-transformer-remark` plugin. The `.md` files feature a small YAML code at the beginning describing each entry's metadata, which Gatsby then converts to GraphQL fields, allowing us to set a date, title or even tags in the files and then using them with no fuss in our React components.

The blog also uses `gatsby-plugin-image` to bring a lot of image goodies to the table. It handles image responsivity by generating multiple sizes of the pictures to adapt to different device sizes, adds lazy loading and much more.

Lastly, the webpage is composed by multiple React components styled with the `styled-components` library.

## Develop

```shell
npm run develop
```

and the blog should be running at http://localhost:8080.

You can also run

```shell
npm run develop-lan
```

so that you can connect not only from your computer but from any device from your LAN (useful for testing in mobile). The url used for this will come out in the terminal.
