import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buttonCss =
  "bg-lime-700 text-white hover:bg-lime-600 px-4 py-2 w-full text-center rounded-lg";
