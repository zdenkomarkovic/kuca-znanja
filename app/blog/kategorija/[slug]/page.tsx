import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Category, Post } from "@/lib/types";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  try {
    // Proveri da li je Sanity konfigurisan
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "demo-project") {
      throw new Error("Sanity not configured");
    }
    
    // Dohvati sve kategorije da pronađemo odgovarajuću
    const categories: Category[] = await client.fetch(`
      *[_type == "category"] {
        _id,
        title,
        "slug": title
      }
    `);

    // Pronađi kategoriju koja odgovara slug-u
    const category = categories.find((cat: Category) => 
      cat.slug.toLowerCase().replace(/\s+/g, '-') === slug
    );
    
    if (!category) {
      notFound();
    }

    const categoryTitle = category.title;

    const posts: Post[] = await client.fetch(`
      *[_type == "post" && $categoryTitle in categories[]->title] | order(publishedAt desc) [0...1000] {
        _id,
        title,
        slug,
        body,
        publishedAt,
        "image": mainImage.asset->url,
        "author": author->name,
        "categories": categories[]->title
      }
    `, { categoryTitle });

    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <SectionHeader
          title={`Blog - ${categoryTitle}`}
          subtitle={`Članci iz kategorije: ${categoryTitle}`}
          icon={BookOpen}
        />
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-muted-foreground mb-4">
              Trenutno nema članaka u ovoj kategoriji
            </h3>
            <p className="text-muted-foreground mb-6">
              Pratite nas za najnovije članke iz kategorije {categoryTitle}.
            </p>
            <Link 
              href="/blog"
              className="text-primary hover:underline font-medium"
            >
              ← Nazad na blog
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {posts.map((post: Post) => (
              <Card key={post._id} className="hover:shadow-lg transition-shadow">
                {post.image && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  {post.author && (
                    <p className="text-sm text-muted-foreground">
                      Autor: {post.author}
                    </p>
                  )}
                  {post.publishedAt && (
                    <p className="text-sm text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString('sr-RS')}
                    </p>
                  )}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.categories.map((cat: string, index: number) => (
                        <span 
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  {post.body && (
                    <div className="text-muted-foreground mb-4 line-clamp-3">
                      {/* @ts-expect-error PortableText type mismatch with Sanity data */}
                      <PortableText value={post.body} />
                    </div>
                  )}
                  <Link 
                    href={`/blog/${post.slug?.current}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Pročitaj više →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-8">
          <Link 
            href="/blog"
            className="text-primary hover:underline font-medium"
          >
            ← Nazad na blog
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching category posts:', error);
    notFound();
  }
} 