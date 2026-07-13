export const translations = {
  en: {
    projects: "Projects",
    skills: "Skills",
    hireMe: "Contact",
    thankYou: "Thank you for exploring my work!",
    openToRoles:
      "📧 I'm currently working as a Developer Associate at SAP in Brno. I'm not actively looking for new opportunities, but feel free to reach out if you'd like to connect or collaborate on something interesting.",
    feelFree: "You can also find me on ",
    or: " or write to me at ",
    connect: "I look forward to connecting!",
    introHeading:
      "SAP Developer | Full-Stack Software Engineer | JS, TS, Python, Rust",
    introParagraph1:
      "Hi! I am a Software Developer, currently based in the Czech Republic 🇨🇿. Taking my first steps in enterprise software development at SAP.",
    introParagraph2:
      "I am committed to growing within the <b>SAP ecosystem</b>: learning <b>ABAP</b>, <b>S/4HANA</b>, <b>SAP BTP</b> and everything that comes with enterprise-scale development.",
    introParagraph3:
      "My background is in <b>Full-Stack Web Development</b>, with additional experience in <b>AI Systems</b>, <b>Databases</b> and <b>DevOps</b>. I enjoy building clear, performant and maintainable software.",
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
    hireMe: "Kontakt",
    thankYou: "Děkuji, že jste si prohlédli mou práci!",
    openToRoles:
      "📧 V současné době pracuji jako Developer Associate v SAP v Brně. Aktivně nehledám nové příležitosti, ale neváhejte mě kontaktovat, pokud byste se chtěli spojit nebo spolupracovat na něčem zajímavém.",
    feelFree: "Najdete mě také na ",
    or: " nebo mi napište na ",
    connect: "Těším se na spojení!",
    introHeading:
      "SAP Developer | Full-Stack softwarový inženýr | JS, TS, Python, Rust",
    introParagraph1:
      "Ahoj! Jsem softwarový vývojář, aktuálně působící v České republice 🇨🇿. Dělám první kroky v oblasti enterprise software development v SAP.",
    introParagraph2:
      "Zaměřuji se na růst v rámci ekosystému <b>SAP</b>: učím se <b>ABAP</b>, <b>S/4HANA</b>, <b>SAP BTP</b> a vše, co patří k vývoji v enterprise měřítku.",
    introParagraph3:
      "Mým zázemím je <b>Full-Stack Web Development</b>, s další zkušeností v oblasti <b>AI systémů</b>, <b>databází</b> a <b>DevOps</b>. Rád vytvářím přehledný, výkonný a udržitelný software.",
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