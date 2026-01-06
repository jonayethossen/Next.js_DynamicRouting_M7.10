import blogs from "@/app/data/blog";
import Link from "next/link";

export default async function SingleBlog({ params }) {
  const { id } = await params;
  const blog = blogs.find((blog) => blog.id === id);
  const { title, description } = blog;

  return (
    <div className="mt-20 bg-black w-[600px] p-10">
      <h1 className="text-xl font-bold text-teal-300">{title}</h1>
      <p className="mt-6">{description}</p>
      <Link href={"/"}>
        <button className="btn btn-success mt-5">Home</button>
      </Link>
    </div>
  );
}
