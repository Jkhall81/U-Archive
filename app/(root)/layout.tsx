export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="size-full min-h-screen ">{children}</section>;
}
