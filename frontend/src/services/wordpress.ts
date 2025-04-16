import { HeroLPSectionType } from "../types/globalTypes";

const BASE_URL = "http://localhost:8000/wp-json/wp/v2";

export async function fetchHeroLPSections(): Promise<HeroLPSectionType[]> {
  const response = await fetch(`${BASE_URL}/hero-lp-section?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch homepage sections");
  }
  return (await response.json()) as HeroLPSectionType[];
}
