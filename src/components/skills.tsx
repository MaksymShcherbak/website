import { skills } from "../data/data";
import IconLabel from "./iconlabel";
import { Locale, t } from "@/lib/i18n";

type SkillsProps = {
  locale: Locale;
};

export default function Skills({ locale }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2">
            {t(locale, "softSkills")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((s) => (
              <span
                key={s[locale]}
                className="px-3 py-1 rounded-lg bg-yellow-200 dark:bg-yellow-800 text-sm inline-block"
              >
                {s[locale]}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            {t(locale, "professionalSkills")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.hard.map((s) => (
              <span
                key={s[locale]}
                className="px-3 py-1 rounded-lg bg-blue-200 dark:bg-blue-800 text-sm inline-block"
              >
                {s[locale]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          {t(locale, "technologies")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.tech.map((t) => (
            <IconLabel label={t} key={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
