import { clsx } from "clsx"
import stc from "string-to-color";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const stringToColor = (str) => {
  return stc(str);
};
