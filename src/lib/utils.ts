import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates experience in years starting from April 2022.
 * Returns either a full year (e.g., 4) or half year (e.g., 4.5).
 */
export function getExperienceYears(): number {
  const startDate = new Date(2022, 3, 1); // April 1, 2022 (April is index 3 in JS Date)
  const currentDate = new Date();
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;
  
  // Floor to nearest half year (0.5)
  return Math.floor(totalMonths / 6) / 2;
}

/**
 * Whole years of experience since April 2022, as a label such as "4+".
 * Use this anywhere the site states years of experience.
 */
export function getExperienceLabel(): string {
  return `${Math.floor(getExperienceYears())}+`;
}

/**
 * Updates description and Open Graph/Twitter meta tags dynamically in the DOM
 * with the correct experience years.
 */
export function updateMetaTags() {
  if (typeof document === 'undefined') return;
    const description = `Full-stack developer with ${getExperienceLabel()} years building web apps with React, Next.js, Node.js, Express, PostgreSQL and MongoDB. Based in Ahmedabad, India.`;

  [
    'meta[name="description"]',
    'meta[property="og:description"]',
    'meta[name="twitter:description"]',
  ].forEach((selector) => {
    document.querySelector(selector)?.setAttribute('content', description);
  });
}
