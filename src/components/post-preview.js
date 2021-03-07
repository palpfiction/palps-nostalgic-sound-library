import React from "react";

const PostPreview = (props) => {
  return (
    <div>
      <h6>{props.date}</h6>
      <h1>{props.title}</h1>
      <p>{props.excerpt}</p>
    </div>
  );
};

export default PostPreview;
