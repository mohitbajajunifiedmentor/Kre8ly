import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional classes, with later Tailwind utilities winning conflicts. */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
