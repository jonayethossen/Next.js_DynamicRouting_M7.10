import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/blogs"} className="btn btn-primary">
        Blog Button
      </Link>
    </div>
  );
}
