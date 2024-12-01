import Link from "next/link";
interface HeadParams {
  link: string;
  linkHref: string;
  linkTitle: string;
}

const Header = ({ link, linkHref, linkTitle }: HeadParams) => {
  return (
    <div className="flex justify-between px-4 pb-2 pt-4">
      <h1 className="md:text-xl text-md font-bold">{link}</h1>
      <Link
        href={linkHref}
        className="md:text-xl text-sm underline hover:text-pink-500 transition-all"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
