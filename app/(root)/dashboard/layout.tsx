import PatientInfoBar from "@/components/PatientInfoBar";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="size-full min-h-screen flex">
      <div className="w-[20vw]">
        <Sidebar />
      </div>
      <div className="border-2 border-blue-500 size-full min-h-screen">
        <div className="border-2 border-orange-500 w-full h-[6vh] mt-[100px]">
          <SearchBar />
          <PatientInfoBar />
          <SearchResults />
          {children}
        </div>
      </div>
    </section>
  );
}
