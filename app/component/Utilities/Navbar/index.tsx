import Link from "next/link";
import Input from "./input";

const Navbar = () => {
  return (
    <header className="bg-pink-500 fixed z-[9999] w-full flex items-center md:h-20 h-20">
      <div className="flex justify-between md:flex-row flex-col p-4 w-full">
        <Link href="/" className="font-bold md:text-3xl text-xl mb-2">
          Ry_Anime
        </Link>
        <Input />
      </div>
    </header>
  );
};

export default Navbar;
