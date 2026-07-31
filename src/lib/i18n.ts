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
      "SAP Developer | Full-Stack Engineer | JS, TS, Python",
    introParagraph1:
      "Hi! I am just a guy taking my first steps in <b>Enterprise Software Development at SAP</b>. I am currently based in Brno, Czech Republic 🇨🇿.",
    introParagraph2:
      "My background is in <b>Full-Stack Web Development</b>,  with additional experience in <b>AI Systems</b>, <b>Databases</b> and <b>DevOps</b>. I enjoy building clear, elegant and maintainable software and always commited to learn new things and topics.",
    introParagraph3:
      "I have <b>2+ years of teaching experience</b> as well. Working with kids and teenagers has sharpened my communication skills and ability to explain technical concepts clearly. I am a curious, optimistic person who just wants to enjoy life and make the world a better place.",
    introParagraph4pre:
      "I worked with a variety of programming languages. My favourite ones are ",
    introParagraph4post:
      " for their strong type safety and reliability.",
    softSkills: "Soft Skills",
    professionalSkills: "Professional (Hard) Skills",
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
      "SAP Developer | Full-Stack Engineer | JS, TS, Python",
    introParagraph1:
      "Ahoj! Jsem jen kluk, který dělá své první kroky v oblasti <b>vývoje podnikového softwaru v SAP</b>. Aktuálně sídlím v Brně v České republice 🇨🇿.",
    introParagraph2:
      "Moje zázemí je ve <b>Full-Stack vývoji webu</b> s dalšími zkušenostmi v oblasti <b>AI systémů</b>, <b>databází</b> a <b>DevOps</b>. Baví mě vytvářet přehledný, elegantní a udržitelný software a jsem vždy odhodlán učit se nové věci a témata.",
    introParagraph3:
      "Mám také <b>více než 2 roky zkušeností s výukou</b>. Práce s dětmi a dospívajícími mi zostřila komunikační schopnosti a schopnost srozumitelně vysvětlovat technické koncepty. Jsem zvědavý a optimistický člověk, který si chce prostě užívat života a dělat svět lepším místem.",
    introParagraph4pre:
      "Pracuju s řadou programovacích jazyků. Oblíbenými jsou ",
    introParagraph4post:
      " pro jejich silnou typovou bezpečností a spolehlivost.",
    softSkills: "Měkké dovednosti",
    professionalSkills: "Profesní (hard) dovednosti",
    technologies: "Technologie",
    madeWith: "Vytvořeno pomocí:",
    website: "Web",
    repository: "Repozitář",
    switchToEnglish: "Switch to English",
    switchToCzech: "Přepnout do češtiny",
    languageLabel: "Přepínač jazyka",
    footer: "Postaveno v roce 2026 pomocí Next.js, TypeScript a Tailwind CSS",
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const t = <K extends TranslationKey>(locale: Locale, key: K) =>
  translations[locale][key];