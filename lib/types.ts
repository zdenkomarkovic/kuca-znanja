export type PortableTextValue = any[]; // PortableText array type

export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: PortableTextValue;
  publishedAt: string;
  image: string;
  author: string;
  categories: string[];
} 