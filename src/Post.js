import React, { useEffect } from "react";
import { useState } from "react";
import SinglePost from "./SinglePost";

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/blog")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <div>
      <h1>{post.length}</h1>
      {post.map((data) => {
        return <SinglePost data={data} key={data._id}></SinglePost>;
      })}
    </div>
  );
};

export default Post;
