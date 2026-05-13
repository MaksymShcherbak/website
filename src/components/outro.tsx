import Image from "next/image";
import { Locale, t } from "@/lib/i18n";

type OutroProps = {
  locale: Locale;
};

export default function Outro({ locale }: OutroProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="text-1lg md:text-xl">
        <p className="pb-5">{t(locale, "thankYou")}</p>
        <p
          className="pb-2"
          dangerouslySetInnerHTML={{ __html: t(locale, "openToRoles") }}
        ></p>
        <p>
          {t(locale, "feelFree")}
          <span className="text-neutral-500 underline decoration-dotted">
            <a href="mailto:maxim.shherbak@gmail.com">
              maxim.shherbak@gmail.com
            </a>
          </span>{" "}
          {t(locale, "or")}
          <span className="text-neutral-500 underline decoration-dotted">
            <a
              href="https://www.linkedin.com/in/maksym-shcherbak-11159b3a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
          .
        </p>
        <p className="pt-2">{t(locale, "connect")}</p>
      </div>
      <div className="w-full max-w-md mx-auto">
        <Image
          src="/hire.png"
          alt="Hire Me Illustration"
          width={600}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
