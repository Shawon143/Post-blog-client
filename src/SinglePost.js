import React from "react";

const SinglePost = (props) => {
  const { text, image, post } = props.data;
  return (
    <div>
      <img src={image} alt="" width={250} />
      <h1>{text}</h1>
      <div dangerouslySetInnerHTML={{ __html: post }} />
    </div>
  );
};

export default SinglePost;
