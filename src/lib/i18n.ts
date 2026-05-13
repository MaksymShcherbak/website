export const translations = {
  en: {
    projects: "Projects",
    skills: "Skills",
    hireMe: "Hire Me!",
    thankYou: "Thank you for exploring my work!",
    openToRoles:
      "📧 I am currently <b>open to Entry-Level roles in Software Development</b>, remote or in the Czech Republic. I am also happy to consider other development opportunities that match my skills.",
    feelFree: "Feel free to reach out via ",
    or: " or ",
    connect: "I look forward to connecting and contributing to your projects!",
    introHeading:
      "Software Engineer | Full-Stack Web Development | JS, TS, Rust, Python, C#",
    introParagraph1:
      "Hi! I am a Software Developer, currently based in the Czech Republic 🇨🇿.",
    introParagraph2:
      "My primary focus is <b>Full-Stack Web Development</b>, with additional experience in <b>AI Systems</b>, <b>Databases</b> and <b>DevOps</b>.",
    introParagraph3:
      "I enjoy building clear, performant and maintainable software. Always trying to approach problems with thoughtful, elegant and practical solutions that benefit users.",
    introParagraph4pre:
      "I adapt easily to new situations and teams. I work with a variety of programming languages, and my favourite ones are ",
    introParagraph4post:
      " for their strong type safety and reliability.",
    softSkills: "Soft Skills",
    professionalSkills: "Professional Skills",
    technologies: "Technologies",
    madeWith: "Made With:",
    website: "Website",
    repository: "Repository",
    switchToEnglish: "Switch to English",
    switchToCzech: "Přepnout do češtiny",
    languageLabel: "Language switcher",
    footer: "Built in 2026 using Next.js, TypeScript & Tailwind CSS",
  },
  cz: {
    projects: "Projekty",
    skills: "Dovednosti",
    hireMe: "Napište mi!",
    thankYou: "Děkuji, že jste si prohlédli mou práci!",
    openToRoles:
      "📧 V současné době <b>hledám pozici Entry-Level ve vývoji softwaru</b>, na dálku nebo v České republice. Rád také zvážím další vývojové příležitosti odpovídající mým dovednostem.",
    feelFree: "Neváhejte mě kontaktovat přes ",
    or: " nebo ",
    connect: "Těším se na spojení a na příležitost přispět k vašim projektům!",
    introHeading:
      "Softwarový inženýr | Full-Stack Web Development | JS, TS, Rust, Python, C#",
    introParagraph1:
      "Ahoj! Jsem softwarový vývojář, aktuálně působící v České republice 🇨🇿.",
    introParagraph2:
      "Mým hlavním zaměřením je <b>Full-Stack Web Development</b>, s další zkušeností v oblasti <b>AI systémů</b>, <b>databází</b> a <b>DevOps</b>.",
    introParagraph3:
      "Rád vytvářím přehledný, výkonný a udržitelný software. Vždy se snažím přistupovat k problémům s promyšlenými, elegantními a praktickými řešeními, která jsou přínosná pro uživatele.",
    introParagraph4pre:
      "Snadno se přizpůsobuji novým situacím a týmům. Pracuji s různými programovacími jazyky a mezi mé oblíbené patří ",
    introParagraph4post:
      " pro jejich silnou typovou bezpečnost a spolehlivost.",
    softSkills: "Měkké dovednosti",
    professionalSkills: "Profesní dovednosti",
    technologies: "Technologie",
    madeWith: "Vytvořeno s:",
    website: "Web",
    repository: "Repozitář",
    switchToEnglish: "Přepnout do angličtiny",
    switchToCzech: "Přepnout do češtiny",
    languageLabel: "Přepínač jazyka",
    footer: "Postaveno v roce 2026 pomocí Next.js, TypeScript a Tailwind CSS",
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const t = <K extends TranslationKey>(locale: Locale, key: K) =>
  translations[locale][key];
