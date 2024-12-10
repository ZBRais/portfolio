import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <div className="relative flex justify-center items-center overflow-hidden flex-col mx-auto bg-white dark:bg-black-100 dark:bg-dot-white/[0.03] bg-dot-black-100/[0.2]">
        <Header />
        <main>
          {/* Hero */}
          <Hero />
          <Skill />
        </main>
      </div>
    </>
  );
}
