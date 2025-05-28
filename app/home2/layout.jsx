import Header from "@/app/components/header";

export default function Home2Layout({ children }) {
  return (
    <div className="-z-10 min-h-dvh">
      <Header />
      {children}
    </div>
  );
}
