import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/landingPage.png')",
      }}
    >
      <main className="size-full min-h-screen flex">
        {/* Main content container left side of screen */}
        <div className="h-full w-full px-6 xl:w-[80vw]">
          {/* Three Line H1 */}
          <div className="mt-[300px] space-y-2 w-full flex flex-col text-3xl 2xl:text-6xl text-white font-extrabold">
            <h1 className="mb-[50px] text-amber-700 text-7xl">U-Archive</h1>
            <h2>Simplify Storage</h2>
            <h2>and Securely Manage Your Growing</h2>
            <h2 className="pl-[20%] 2xl:pl-[52%]">Healthcare Data</h2>
          </div>

          {/* White Divider Line */}
          <div className="border-b-4 border-white w-[80%] 2xl:w-[60%] mt-[50px]" />

          {/* Text */}
          <p className="mt-[50px] text-slate-900 prose text-2xl font-bold">
            At U-Archive, we simplify storage for healthcare providers by
            securely backing up patient records and critical documents. Our
            service helps you manage growing data, ensuring compliance and
            freeing up valuable space in your database, all while maintaining
            the highest standards of security.
          </p>

          {/* Buttons */}
          <div className="flex mt-[50px] space-x-6">
            <Link href="/">
              <Button
                size="lg"
                className="w-[200px] text-xl border-2 border-white text-white rounded-xl"
              >
                Sign in
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                className="w-[200px] text-xl bg-black text-white rounded-xl"
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
