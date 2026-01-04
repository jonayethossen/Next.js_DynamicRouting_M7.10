import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/blog";

export default function Blogs() {
  return (
    // <div className="p-8">
    //   <h1 className="text-[60px] font-bold">Blog item</h1>
    //   <div className="mt-6 p-4">
    //     {blogs.map((blog) => (
    //       <BlogItem key={blog.id} title={blog.title} />
    //     ))}
    //   </div>
    //   <Link href={"/"} className="btn btn-primary">
    //     {" "}
    //     Home
    //   </Link>
    // </div>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="mr-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
