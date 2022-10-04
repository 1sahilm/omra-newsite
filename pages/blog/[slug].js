import React from "react";

const BlogContentPage = ({ blogData }) => {
  console.log({ blogData });
  return (
    <div>
      <div>{blogData?.content?.rendered}</div>
    </div>
  );
};
export default BlogContentPage;

export const getServerSideProps = async ({ query }) => {
  const baseUrl = `https://newblog.omrasolutions.com/wp-json/wp/v2/posts/${query?.slug}`;

  const res = await fetch(baseUrl);
  const data = await res.json();

  return {
    props: {
      blogData: data,
    },
  };
};
