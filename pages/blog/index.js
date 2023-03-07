import moment from "moment";
import React from "react";
import Layout from "../../layout";
import css from "../../styles/blog.module.scss";
import BlogCard from "../../component/blog/card";

/**
 * Blogs Page
 * @param {*} param0
 * @returns
 */
const BlogPage = ({ blogData }) => {
  return (
    <Layout>
      <div className={css.container}>
        <h1>Our Popular Blogs </h1>
        <div className={css["grid-list"]}>
          {blogData.map((data, index) => {
            return (
              <BlogCard
                key={index}
                category={data?.categories[0]}
                date={moment(data?.date).format("LL")}
                href={`/blog/${data?.slug}`}
                source={data?.jetpack_featured_media_url}
                title={data?.title?.rendered}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default BlogPage;

export const getServerSideProps = async () => {
  const baseUrl = `https://newblog.omrasolutions.com/wp-json/wp/v2/posts`;
  const res = await fetch(baseUrl);
  const data = await res.json();

  return {
    props: {
      blogData: data,
    },
  };
};
