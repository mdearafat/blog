import Link from "next/link";
import { Image } from "next/image";

const Navbar = () => {
  return (
    <nav className=" max-w-5xl flex justify-between mx-auto py-6 px-3 text-black">
      <div>
        <h2 className="font-blod text-2xl italic">Kitchen Kravings</h2>
      </div>
      <div className="flex space-x-6 text-xl">
        <Link href="../">Home</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
