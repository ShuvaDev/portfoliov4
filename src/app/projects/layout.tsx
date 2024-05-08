import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/homePage/Header"), {
  ssr: false,
});

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-fit widthContainer">
      <div>
        <Header />
        {children}
      </div>
    </main>
  );
}
