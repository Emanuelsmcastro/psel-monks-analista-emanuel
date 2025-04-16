import { GenericSectionType } from "../types/globalTypes";

const BASE_URL = "http://localhost:8000/wp-json/wp/v2";

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
