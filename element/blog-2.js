import BlogSlider2 from "../component/blogSlider";

function Blog2() {
  return (
    <>
      <section className="content-inner-2 hullheight">
        <div className="container  our_blog">
          <div className="section-head style-3 text-center">
            <h6 className="sub-title text-primary bgl-primary m-b15">
              Our Blog
            </h6>
            {/* <h2 className="title">Latest News & Blog</h2> */}
          </div>
          <BlogSlider2 />
        </div>
      </section>
    </>
  );
}

export default Blog2;
