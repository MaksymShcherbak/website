import Skills from "@/components/skills";
import ProjectCarousel from "../components/carousel";
import Intro from "@/components/intro";
import ThemeSwitcher from "@/components/themeswitcher";
import Outro from "@/components/outro";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <main className="space-y-10">
        <section className="max-w-6xl mx-auto px-6 pt-10 mb-1 justify-center items-center flex gap-[50px]">
          <Intro />
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-10">
          <h2 className="text-3xl font-bold ml-4 mb-0 ">Projects</h2>
          <ProjectCarousel />
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <Skills />
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold underline decoration-dotted mb-1 md:mb-0">
            Hire Me!
          </h2>
          <Outro />
        </section>
      </main>
      <footer className="w-full py-4 text-center text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700">
        <p>
          Built in 2026 using <b>Next.js</b>, <b>TypeScript</b> &{" "}
          <b>Tailwind CSS</b>
        </p>
      </footer>
    </>
  );
}
