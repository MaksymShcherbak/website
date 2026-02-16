import Image from "next/image";
import { iconMapping } from "../data/data";

type IconLabelProps = {
  label: string;
};

export default function IconLabel({ label }: IconLabelProps) {
  let className = "h-full w-auto object-contain shrink-0";
  if (label == "Flask" || label == "Unreal Engine 5" || label == "Unity") {
    className += " invert dark:invert-0";
  }
  return (
    <span className="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 inline-flex items-center gap-2 h-10">
      <Image
        src={`/icons/${iconMapping[label]}`}
        alt={label}
        width={32}
        height={32}
        className={className}
      />
      {label}
    </span>
  );
}
