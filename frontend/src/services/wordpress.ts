import { GenericSectionType } from "../types/globalTypes";

const BASE_URL = "http://localhost:8000/wp-json/wp/v2";
const BASE_PSEL_URL = "http://localhost:8000/wp-json/psel";

export async function fetchHeroLPSections(): Promise<GenericSectionType[]> {
  const response = await fetch(`${BASE_URL}/hero-lp-section?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch Hero-LP sections");
  }
  return (await response.json()) as GenericSectionType[];
}

export async function fetchProductsSections(): Promise<GenericSectionType[]> {
  const response = await fetch(`${BASE_URL}/products-section?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch Products section");
  }
  return (await response.json()) as GenericSectionType[];
}

export async function fetchSimpleGallery(): Promise<GenericSectionType[]> {
  const response = await fetch(`${BASE_URL}/simple-gallery?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch Simple Gallery section");
  }
  return (await response.json()) as GenericSectionType[];
}

export async function fetchCategoriesSection(): Promise<GenericSectionType[]> {
  const response = await fetch(`${BASE_URL}/categories-section?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch Categories section");
  }
  return (await response.json()) as GenericSectionType[];
}

export async function fetchCardsSection(): Promise<GenericSectionType[]> {
  const response = await fetch(`${BASE_URL}/cards-section?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch Cards section");
  }
  return (await response.json()) as GenericSectionType[];
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`${BASE_PSEL_URL}/v1/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return response.json();
}
