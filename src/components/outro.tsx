import Image from "next/image";

export default function Outro() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="text-1lg md:text-xl">
        <p className="pb-5">Thank you for exploring my work!</p>
        <p className="pb-2">
          📧 I am currently open to <b>Junior / Entry-Level Full-Stack</b>{" "}
          roles, remote or in the Czech Republic, and I am also happy to
          consider <b>other development opportunities that match my skills</b>.
        </p>
        <p>
          Feel free to reach out via{" "}
          <span className="text-neutral-500 underline decoration-dotted">
            <a href="mailto:maxim.shherbak@gmail.com">
              maxim.shherbak@gmail.com
            </a>
          </span>{" "}
          or{" "}
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
        <p className="pt-2">
          I look forward to connecting and contributing to your projects!
        </p>
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
