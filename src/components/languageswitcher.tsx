"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, t } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const isCz = pathname.startsWith("/cz");
  const href = isCz ? "/" : "/cz";
  const label = isCz ? "🇬🇧" : "🇨🇿";
  const title = isCz
    ? t(locale, "switchToEnglish")
    : t(locale, "switchToCzech");

  return (
    <Link
      href={href}
      className="p-5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer w-15 h-15 text-center flex items-center justify-center"
      aria-label={title}
      title={title}
    >
      <span className="text-md font-semibold">{label}</span>
    </Link>
  );
}
