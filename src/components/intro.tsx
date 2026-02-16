"use client";

import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Intro() {
  const [mounted, setMounted] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const paragraphsCount = 8;
    let current = 1;

    const interval = setInterval(() => {
      setVisibleIndex(current);
      current += 2;
      if (current >= paragraphsCount) clearInterval(interval);
    }, 300);

    return () => clearInterval(interval);
  }, [mounted]);

  const paragraphs = [
    <>
      Hi! I am a Ukrainian Software Developer with <b>Master&apos;s Degree</b>{" "}
      🎓, currently based in the Czech Republic 🇨🇿.
    </>,
    <>
      My primary focus is <b>Full-Stack Web Development</b>, with additional
      experience in <b>AI systems</b>, <b>Databases</b>, <b>GameDev</b> and
      performance-oriented applications.
    </>,
    <>
      I enjoy building clear and maintainable software. Always trying to
      approach problems with thoughtful, elegant and practical solutions. I work
      with a variety of programming languages, and my preferred ones are{" "}
      <Image
        src="/icons/rust.png"
        width={20}
        height={20}
        alt="Rust"
        className="inline-block mr-1"
      />
      <b>Rust</b> and{" "}
      <Image
        src="/icons/ts.png"
        width={20}
        height={20}
        alt="TypeScript"
        className="inline-block mr-1"
      />
      <b>TypeScript</b> for their strong type safety and reliability.
    </>,
  ];

  return (
    <div className="md:flex gap-4 justify-center items-center">
      <div className="relative inline-block px-6">
        <div className="md:relative w-32 h-32 -right-8 mx-auto perspective">
          <div className="bubble-inner relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
            <div className="bubble-front absolute w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/avatars/avatar1.jpg"
                alt="avatar"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="bubble-back absolute w-full h-full backface-hidden rotate-y-180 rounded-full overflow-hidden border-4 border-white shadow-md  bg-white dark:bg-neutral-700">
              <Image
                src="/code.png"
                alt="code"
                fill
                className="object-cover p-5"
              />
            </div>
          </div>
        </div>

        <div className="relative hidden md:block w-32 h-32 -left-8 perspective">
          <div className="bubble-inner relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
            <div className="bubble-front absolute w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/avatars/avatar2.jpg"
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="bubble-back absolute w-full h-full backface-hidden rotate-y-180 rounded-full overflow-hidden border-4 border-white shadow-md  bg-white dark:bg-neutral-700">
              <Image
                src="/coffee.png"
                alt="coffee"
                fill
                className="object-cover p-5"
              />
            </div>
          </div>
        </div>

        <div className="relative hidden md:block  w-32 h-32 -right-8 perspective">
          <div className="bubble-inner relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
            <div className="bubble-front absolute w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/avatars/avatar3.jpg"
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="bubble-back p-5 absolute w-full h-full backface-hidden rotate-y-180 rounded-full overflow-hidden border-4 border-white shadow-md bg-white dark:bg-neutral-700">
              <Image
                src="/git.png"
                alt="git"
                fill
                className="object-cover  p-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-6 text-neutral-700 dark:text-neutral-300 space-y-3 text-base md:text-lg leading-relaxed text-justify">
        <h1 className="text-2xl md:text-5xl font-bold mb-2">
          Maksym Shcherbak 🇺🇦
        </h1>
        <h2>
          Software Engineer | Full-Stack Web Development | JS, TS, Rust, Python,
          C#
        </h2>
        <p className="text-lg text-neutral-500 mb-4 underline decoration-dotted">
          <a href="mailto:maxim.shherbak@gmail.com">maxim.shherbak@gmail.com</a>
        </p>
        <p>
          <a
            href="https://github.com/MaksymShcherbak"
            target="_blank"
            rel="noopener noreferrer"
            className="invert dark:invert-0 inline-block"
          >
            <Image src="/github.svg" width={32} height={32} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/maksym-shcherbak-11159b3a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="invert dark:invert-0 inline-block ml-2"
          >
            <Image src="/linkedin.svg" width={32} height={32} alt="github" />
          </a>
        </p>

        {paragraphs.map((p, idx) => (
          <p
            key={idx}
            className={`transition-all duration-700 ease-out ${
              visibleIndex >= idx
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }`}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
