import {
  ContactSecurityChallenge,
  GenericSectionType,
} from "../types/globalTypes";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_PSEL_URL = import.meta.env.VITE_API_PSEL_BASE_URL;

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
  security_result: string;
}) {
  const response = await fetch(`${BASE_PSEL_URL}/v1/contact`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Failed to submit contact form");
  }

  return responseData;
}

export async function fetchContactSecurityChallenge(): Promise<ContactSecurityChallenge> {
  const response = await fetch(`${BASE_PSEL_URL}/v1/security-challenge`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Security Challange");
  }
  return (await response.json()) as ContactSecurityChallenge;
}
