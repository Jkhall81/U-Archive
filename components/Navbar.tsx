import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full h-[140px] bg-transparent absolute flex max-2xl:hidden">
      <div className="h-[90%] w-[33%] bg-transparent text-white flex justify-between items-center px-6 text-2xl font-semibold">
        <Link href="/about-us">About Us</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/resources">Resources</Link>
      </div>
      <div className="h-full w-[33%]"></div>
      <div className="h-[90%] w-[33%] bg-transparent text-white flex justify-between items-center px-6 text-2xl font-semibold">
        <Link href="/sign-in">Sign in</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
};
