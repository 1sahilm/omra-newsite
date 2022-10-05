import Link from "next/link";
import BlogSlider2 from "../component/blogSlider";

function Blog2() {
  return (
    <section className="content-inner-2 hullheight">
      <div className="container  our_blog">
        <div className="section-head style-3 text-center">
          <h6 className="sub-title text-primary bgl-primary m-b15">Our Blog</h6>
        </div>
        <BlogSlider2 />
        <div className="view-more-button">
          <Link href="/blog">View More Blog</Link>
        </div>
      </div>
    </section>
  );
}

export default Blog2;
