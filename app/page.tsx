import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <section className="h-screen">
      <nav className="tablet:hidden select-none h-16 px-8 flex items-center text-2xl font-semibold justify-between">
        <Link className="" href="/">
          Home
        </Link>
        <DarkModeToggle />
        <Link className="" href="/dashboard">
          Dashboard
        </Link>
      </nav>
      <Image
        className="absolute hidden tablet:block z-0 ml-[56vw] mt-[30vh] rounded-bl-3xl rounded-tr-3xl rounded-br-3xl"
        src="/landingPage.png"
        alt="sunset"
        height={800}
        width={800}
      />
      <main className="size-full min-h-screen flex">
        {/* Main content container left side of screen */}
        <div className="h-full w-full px-6 xl:w-[80vw]">
          {/* Three Line H1 */}
          <div className="relative mt-[25vh] space-y-2 w-full flex flex-col text-3xl 2xl:text-6xl dark:text-white text-slate-900 font-extrabold">
            <h1 className="mb-[4vh] text-amber-700 text-7xl">U-Archive</h1>
            <h2>Simplify Storage</h2>
            <h2>and Securely Manage Your Growing</h2>
            <h2 className="pl-[20%] 2xl:pl-[52%]">Healthcare Data</h2>
          </div>

          {/* White Divider Line */}
          <div className="border-b-4 border-slate-900 dark:border-amber-700 w-[80%] 2xl:w-[60%] mt-[4vh]" />

          {/* Text */}
          <p className="relative mt-[4vh] dark:text-white text-slate-900 prose text-2xl font-bold">
            At U-Archive, we simplify storage for healthcare providers by
            securely backing up patient records and critical documents. Our
            service helps you manage growing data, ensuring compliance and
            freeing up valuable space in your database, all while maintaining
            the highest standards of security.
          </p>

          {/* Buttons */}
          <div className="flex mt-[4vh] space-x-6">
            <Link href="/">
              <Button
                size="lg"
                className="w-[200px] text-xl border-2 border-slate-900 text-slate-900 dark:border-amber-700 dark:text-amber-700 rounded-xl"
              >
                Sign in
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                className="w-[200px] text-xl bg-slate-900 text-white dark:bg-amber-700 dark:text-slate-900 rounded-xl"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Empty */}
        <div className="h-full w-[0%] xl:w-[20vw]"></div>
      </main>
      <Footer />
    </section>
  );
}
