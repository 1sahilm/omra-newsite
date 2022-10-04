import Link from "next/link";
import React from "react";
import Layout from "../../layout";
import css from "../../styles/blog.module.scss";
const BlogPage = ({ blogData }) => {
  console.log(blogData);
  return (
    <Layout>
      <div className={css.container}>
        <h1>Our Popular Blogs </h1>

        <div className={css["grid-list"]}>
          {blogData.map((data, index) => {
            return (
              <Link href={`/blog/${data?.slug}`}>
                <a key={index} className={css["grid-item"]}>
                  <img
                    src={data?.jetpack_featured_media_url}
                    alt="blog-cover"
                  />
                  <div className={css["post-text"]}>
                    <div className={css["post-info"]}>
                      <a className="link-category">Technology</a>
                      <div className="date">Jan 16, 2022</div>
                    </div>
                    <h5 className="post-heading">{data?.title?.rendered}</h5>
                  </div>
                </a>
              </Link>
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
