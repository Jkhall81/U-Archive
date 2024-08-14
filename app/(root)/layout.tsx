import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="size-full min-h-screen ">
      <Navbar />

      {children}
    </section>
  );
}
