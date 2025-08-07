import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // iz .env fajla
  dataset: "production",
  apiVersion: "2025-01-01", // koristi današnji datum
  useCdn: true, // true za public fetch
});
