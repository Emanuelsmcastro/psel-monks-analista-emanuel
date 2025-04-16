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
