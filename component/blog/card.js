import Link from "next/link";
import React from "react";
import css from "../../styles/blog.module.scss";

const BlogCard = ({ date, title, category, source, href }) => {
  console.log("title", title.toString());
  return (
    <Link href={href}>
      <a
        className={css["grid-item"]}
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <img src={source} alt="blog-cover" />
        <div className={css["post-text"]}>
          <div className={css["post-info"]}>
            <div>{category}</div>
            <div>{date}</div>
          </div>
          <h5 className="post-heading">
            {title.toString().replace(/\&nbsp;/g, "")}
          </h5>
        </div>
      </a>
    </Link>
  );
};
export default BlogCard;
