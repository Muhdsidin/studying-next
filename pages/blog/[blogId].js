import axios from "axios";
import { useParams } from "next/navigation";
import React from "react";
import params from "../hello/[...params]";

function BlogDetails({ blog }) {
  return (
    <div>
      <p>{blog.userId}</p> <hr />
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetails;

export async function getStaticPath() {
  return {
    paths: [
      { params: { blogId: "1" } },
      { params: { blogId: "2" } },
      { params: { blogId: "3" } },

    ],
    fallback:false
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await axios(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const data = response.data;

  return {
    props: {
      blog: data,
    },
  };
}
