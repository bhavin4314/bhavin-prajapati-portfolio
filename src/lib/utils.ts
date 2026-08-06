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
 * Updates description and Open Graph/Twitter meta tags dynamically in the DOM
 * with the correct experience years.
 */
export function updateMetaTags() {
  if (typeof document === 'undefined') return;
  const experience = getExperienceYears();
  
  const descElements = [
    {
      selector: 'meta[name="description"]',
      template: `Bhavin Prajapati - Frontend Developer with ${experience}+ years of experience in React, Next.js, Tailwind, and modern web technologies. Explore my portfolio, projects, and skills.`
    },
    {
      selector: 'meta[property="og:description"]',
      template: `Frontend Developer with ${experience}+ years of experience in React, Next.js, Tailwind, and modern web technologies.`
    },
    {
      selector: 'meta[name="twitter:description"]',
      template: `Frontend Developer with ${experience}+ years of experience in React, Next.js, Tailwind, and modern web technologies.`
    }
  ];

  descElements.forEach(({ selector, template }) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute('content', template);
    }
  });
}

