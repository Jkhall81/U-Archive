import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="absolute flex bg-transaprent bottom-0 w-full h-[100px] text-white">
      <div className="h-full 2xl:w-[60vw]"></div>
      <div className="h-full w-full 2xl:w-[40vw] flex justify-between items-center px-6 text-2xl space-x-4">
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};
