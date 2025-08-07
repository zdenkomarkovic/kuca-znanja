import { client } from "./client";

interface Category {
  _id: string;
  title: string;
  slug: string;
}

export async function getCategories(): Promise<Category[]> {
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