import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/blog";
import HeroImg from "../../public/blogImg.png";
import Image from "next/image";
export default function Bloges() {
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
        <Image
          src={HeroImg}
          alt="heroImg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Blog Post!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus
            consectetur aspernatur? Magni deserunt tempore eveniet? At
            temporibus, repellat, beatae nam eum qui pariatur odit nisi animi
            dolores aut! Quasi voluptatum nisi iusto nostrum facere ex
            voluptatem earum nemo. Ipsum eligendi ea exercitationem quisquam
            voluptas, quaerat rem voluptate quibusdam veniam?
          </p>
          {/* <div className="space-x-2">
            <Link href={"/blog1"} className="btn btn-primary">
              Blog1
            </Link>
            <Link href={"/blog2"} className="btn btn-primary">
              Blog2
            </Link>
            <Link href={"/blog3"} className="btn btn-primary">
              Blog3
            </Link>
          </div> */}
          <div className=" flex gap-2">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} title={blog.title} />
            ))}
            <Link href={"/"} className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
