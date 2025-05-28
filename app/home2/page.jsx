import homeImg from "@/public/food01.jpg";
import Hero from "@/app/components/hero";

export default function Home2Page({ params }) {
  return <Hero imgUrl={homeImg} content={"Do My Best!"} />;
}
