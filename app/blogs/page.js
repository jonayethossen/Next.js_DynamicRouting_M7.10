import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/blog";

export default function Blogs() {
  return (
    <div className="p-8">
      <h1 className="text-[60px] font-bold">Blog item</h1>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} title={blog.title} />
        ))}
      </div>
      <Link href={"/"} className="btn btn-primary">
        {" "}
        Home
      </Link>
    </div>
  );
}
