"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { projects, Project } from "../data/data";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import IconLabel from "./iconlabel";
import ImageModal from "./imagemodal";

export default function ProjectCarousel() {
  const [mounted, setMounted] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbnailImageIndex, setThumbnailImageIndex] = useState<number | null>(
    null,
  );
  const [thumbnailProject, setThumbnailProject] = useState<Project | null>(
    null,
  );
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  const scrollPrev = useCallback(() => {
    setUserInteracted(true);
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    setUserInteracted(true);
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      setUserInteracted(true);
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    if (userInteracted) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [emblaApi, userInteracted]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onUserDrag = () => setUserInteracted(true);

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", onUserDrag);
    emblaApi.on("pointerUp", onUserDrag);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onUserDrag);
      emblaApi.off("pointerUp", onUserDrag);
    };
  }, [emblaApi]);

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={scrollPrev}
        className="hidden md:block absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 
                   bg-white/80 dark:bg-neutral-900/80 
                   backdrop-blur px-3 py-2 rounded-full shadow cursor-pointer"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:block absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 
                   bg-white/80 dark:bg-neutral-900/80 
                   backdrop-blur px-3 py-2 rounded-full shadow cursor-pointer"
      >
        <ChevronRight />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((p) => (
            <div key={p.title} className="min-w-full p-4">
              <div className="h-full">
                {p.imgs && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                    {p.imgs.map((img, index) => (
                      <div
                        key={img.src}
                        className="relative h-48 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:z-10 shadow cursor-pointer"
                        onClick={() => {
                          setThumbnailImageIndex(index);
                          setThumbnailProject(p);
                          setUserInteracted(true);
                        }}
                      >
                        <Image
                          src={`/gallery/${img.src}`}
                          alt={img.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">
                  {p.website ? (
                    <a href={p.website} target="_blank" className="underline">
                      {p.title}
                    </a>
                  ) : (
                    <>{p.title}</>
                  )}
                  {p.website && p.repo && (
                    <>
                      <a href={p.website} target="_blank">
                        <Globe className="object-cover w-[32px] h-[32px] inline-block ml-2 mb-2" />
                      </a>
                      <a href={p.repo} target="_blank">
                        <Image
                          src="/github.svg"
                          alt="github"
                          width={32}
                          height={32}
                          className="object-cover inline-block ml-2 mb-2 invert dark:invert-0 "
                        />
                      </a>
                    </>
                  )}
                </h3>

                <p
                  className="text-base text-neutral-700 dark:text-neutral-300 mb-4"
                  dangerouslySetInnerHTML={{ __html: p.description }}
                />

                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 mb-4 space-y-1">
                  {p.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-xl bg-blue-200 dark:bg-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4 items-center">
                  <p>Made With: </p>
                  {p.tech.map((t) => (
                    <IconLabel label={t} key={t} />
                  ))}
                </div>

                {p.website && p.repo && (
                  <p className="mt-2 text-blue-600 dark:text-blue-400">
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                    <span className=" text-neutral-700 dark:text-neutral-300">
                      {" | "}
                    </span>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                      Repository
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === selectedIndex
                ? "bg-neutral-900 dark:bg-white scale-125"
                : "bg-neutral-400"
            }`}
          />
        ))}
      </div>

      {thumbnailImageIndex !== null && thumbnailProject !== null && (
        <ImageModal
          img={thumbnailProject.imgs[thumbnailImageIndex]}
          closeModal={() => {
            setThumbnailImageIndex(null);
            setThumbnailProject(null);
          }}
        />
      )}
    </div>
  );
}
