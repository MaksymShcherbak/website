import Skills from "./skills";
import ProjectCarousel from "./carousel";
import Intro from "./intro";
import ThemeSwitcher from "./themeswitcher";
import Outro from "./outro";
import { Locale, t } from "@/lib/i18n";

type HomeProps = {
  locale: Locale;
};

export default function Home({ locale }: HomeProps) {
  return (
    <>
      <ThemeSwitcher locale={locale} />
      <main className="space-y-10">
        <section className="max-w-6xl mx-auto px-6 pt-10 mb-1 justify-center items-center flex gap-[50px]">
          <Intro locale={locale} />
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-10">
          <h2 className="text-3xl font-bold ml-4 mb-0 ">
            {t(locale, "projects")}
          </h2>
          <ProjectCarousel locale={locale} />
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">{t(locale, "skills")}</h2>
          <Skills locale={locale} />
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold underline decoration-dotted mb-2">
            {t(locale, "hireMe")}
          </h2>
          <Outro locale={locale} />
        </section>
      </main>
      <footer className="w-full py-4 text-center text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700">
        <p>{t(locale, "footer")}</p>
      </footer>
    </>
  );
}
