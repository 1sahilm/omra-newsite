import moment from "moment/moment";
import React from "react";
import Layout from "../../layout";
import css from "../../styles/blog.module.scss";
import BlogCard from "./card";

/**
 * Blogs Details Page
 * @param {*} param0
 * @returns
 */
const BlogContentPage = ({ blogData, threeBlogs }) => {
  return (
    <Layout>
      <div className={css.container}>
        <div className={css["blog-hero-image"]}>
          <img src={blogData?.jetpack_featured_media_url} alt="" />
        </div>
        <div className={css["date"]}>
          <span>{moment(blogData?.date).format("LL")}</span>
        </div>
        <div className={css["blog-title"]}>
          <h1>{blogData?.title?.rendered}</h1>
        </div>
        <div
          className={css["blog-content"]}
          dangerouslySetInnerHTML={{
            __html: blogData?.content?.rendered,
          }}
        ></div>
        <div className={css["blog-title"]}>
          <h1>Explore More</h1>
        </div>
        <div className={css["grid-list"]}>
          {threeBlogs.map((data, index) => {
            console.log(data);
            return (
              <BlogCard
                key={index}
                category={data?.categories[0]}
                date={moment(data?.date).format("LL")}
                href={`/blog/${data?.id}`}
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
export default BlogContentPage;

export const getServerSideProps = async ({ query }) => {
  const baseUrl = `https://newblog.omrasolutions.com/wp-json/wp/v2/posts`;

  const [blogData, threeBlogs] = await Promise.all([
    fetch(`${baseUrl}/${query?.slug}`),
    fetch(baseUrl),
  ]);
  const [singleBlogData, mostPopular] = await Promise.all([
    blogData.json(),
    threeBlogs.json(),
  ]);
  // return { props: { operations, incidents } };

  return {
    props: {
      blogData: singleBlogData,
      threeBlogs: mostPopular?.slice(0, 3),
    },
  };
};
