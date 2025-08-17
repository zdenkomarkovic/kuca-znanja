export type PortableTextValue = unknown[]; // PortableText array type

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: PortableTextValue;
  publishedAt: string;
  published?: boolean;
  image: string;
  author: string;
  categories: string[];
} 