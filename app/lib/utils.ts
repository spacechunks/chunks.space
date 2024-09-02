import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ensureHttps(url: string) {
  if (url.startsWith("http://")) {
    return url.replace("http://", "https://");
  }

  return url;
}

export function getTwoLettersOfName(fullName: string): string {
  // Remove leading and trailing whitespace and split the name into parts
  const nameParts = fullName.trim().split(/\s+/);

  // If the name is empty, return an empty string
  if (nameParts.length === 0) {
    return "";
  }

  // Get the first name (first part)
  const firstName = nameParts[0];

  // If the first name is only one letter, and there's a second part, use the first letter of the second part
  if (firstName.length === 1 && nameParts.length > 1) {
    return (firstName + nameParts[1][0]).toUpperCase();
  }

  // Otherwise, return the first two letters of the first name
  return firstName.slice(0, 2).toUpperCase();
}
