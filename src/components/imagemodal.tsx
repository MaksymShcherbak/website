"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { GalleryImage } from "@/data/data";

interface ImageModalProps {
  img: GalleryImage;
  closeModal: () => void;
}

export default function ImageModal({ img, closeModal }: ImageModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/75 cursor-pointer"
        onClick={closeModal}
      />

      <div className="relative z-10 w-[90vw] max-w-3xl sm:max-w-5xl bg-transparent flex flex-col items-center pointer-events-none">
        <button
          onClick={closeModal}
          className="absolute cursor-pointer -top-2 -right-2 sm:-top-5 sm:-right-5 z-20 p-3 bg-white dark:bg-neutral-900 rounded-full shadow hover:bg-white dark:hover:bg-neutral-700 pointer-events-auto"
        >
          <X className="w-6 h-6" />
        </button>

        <div
          className="relative w-full pointer-events-auto max-h-[80vh] sm:max-h-[90vh]"
          style={{
            aspectRatio: "16 / 9",
          }}
        >
          <Image
            src={`/gallery/${img.src}`}
            alt={img.name}
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <h1 className="mt-4 text-xl sm:text-xl md:text-2xl font-bold text-white text-center pointer-events-auto">
          {img.name}
        </h1>
      </div>
    </div>
  );
}
