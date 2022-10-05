import Link from "next/link";
import React from "react";
import css from "../../styles/blog.module.scss";

const BlogCard = ({ date, title, category, source, href }) => {
  return (
    <Link href={href}>
      <a className={css["grid-item"]}>
        <img src={source} alt="blog-cover" />
        <div className={css["post-text"]}>
          <div className={css["post-info"]}>
            <div>{category}</div>
            <div>{date}</div>
          </div>
          <h5 className="post-heading">{title}</h5>
        </div>
      </a>
    </Link>
  );
};
export default BlogCard;
