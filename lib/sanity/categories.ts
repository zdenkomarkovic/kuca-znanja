import { client } from "./client";

export async function getCategories() {
  try {
    const categories = await client.fetch(`
      *[_type == "category"] {
        _id,
        title,
        "slug": title
      }
    `);
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
} 