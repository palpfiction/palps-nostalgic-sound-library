import { Link } from "gatsby";
import React from "react";
import { slugify } from "../utils/slugify";

const Tag = ({ tag }) => {
  return <Link to={`/tags/${slugify(tag)}`}>{tag}</Link>;
};

export default Tag;
