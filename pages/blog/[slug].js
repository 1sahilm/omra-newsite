import moment from "moment/moment";
import React from "react";
import Layout from "../../layout";
import css from "../../styles/blog.module.scss";
import BlogCard from "../../component/blog/card";
import Image from "next/image";
import { useRouter } from "next/router";

/**
 * Blogs Details Page
 * @param {*} param0
 * @returns
 */
const BlogContentPage = ({ blogData, threeBlogs }) => {
  const router = useRouter();
  console.log("blogs", router.query.slug);
  const blogData1 = threeBlogs.find((item) => item.slug == router.query.slug);

  return (
    <Layout>
      <div className={css.container}>
        {/* <Image
          src={blogData1?.jetpack_featured_media_url}
          alt="vbvdb"
          width=""
          height=""
        /> */}
        <div className={css["blog-hero-image"]}>
          <img src={blogData1?.jetpack_featured_media_url} alt="" />
        </div>
        <div className={css["date"]}>
          <span>{moment(blogData1?.date).format("LL")}</span>
        </div>
        <div className={css["blog-title"]}>
          <h1>{blogData1?.title?.rendered}</h1>
        </div>
        <div
          className={css["blog-content"]}
          dangerouslySetInnerHTML={{
            __html: blogData1?.content?.rendered,
          }}
        ></div>
        <div className={css["blog-title"]}>
          <h1>Explore More</h1>
        </div>
        <div className={css["grid-list"]}>
          {threeBlogs.map((data, index) => {
            let title = data?.title?.rendered;

            return (
              <BlogCard
                key={index}
                category={data?.categories[0]}
                date={moment(data?.date).format("LL")}
                href={`/blog/${data?.slug}`}
                source={data?.jetpack_featured_media_url}
                title={title}
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
    fetch(`${baseUrl}/${query?.id}`),
    fetch(baseUrl),
  ]);
  console.log(blogData?.slug);
  const [singleBlogData, mostPopular] = await Promise.all([
    blogData.json(),
    threeBlogs.json(),
  ]);
  console.log("dgfgd", threeBlogs);
  // return { props: { operations, incidents } };

  return {
    props: {
      blogData: singleBlogData,
      threeBlogs: mostPopular?.slice(0, 3),
    },
  };
};
