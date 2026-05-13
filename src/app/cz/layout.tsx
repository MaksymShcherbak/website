import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maksym Shcherbak | Software Developer",
  description: "FullStack Software Developer",
};

export default function CzechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
