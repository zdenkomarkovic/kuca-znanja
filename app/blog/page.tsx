import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen } from "lucide-react";
import { getCategories } from "@/lib/sanity/categories";
import Link from "next/link";
import Image from "next/image";
import { Category, Post } from "@/lib/types";

export const revalidate = 0;

interface BlogPageProps {
  searchParams: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const page = parseInt(searchParams.page || '1');
  const postsPerPage = 9;
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  try {
    // Proveri da li je Sanity konfigurisan
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "demo-project") {
      throw new Error("Sanity not configured");
    }
    
    const allPosts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        body,
        publishedAt,
        "image": mainImage.asset->url,
        "author": author->name,
        "categories": categories[]->title
      }
    `);
    
    const categories = await getCategories();
    
    // Paginacija
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const posts = allPosts.slice(startIndex, endIndex);
    


    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <SectionHeader title="Blog" icon={BookOpen} />

        {/* Filter dugmad */}
        <div className="flex flex-wrap gap-2 mt-8 mb-6">
          <div className="w-full text-center mb-4 text-sm text-muted-foreground">
            Stranica {page} od {totalPages} • Ukupno {totalPosts} članaka
          </div>
          {categories.map((category: Category) => (
            <Button key={category._id} variant="outline" size="sm" asChild>
              <Link
                href={`/blog/kategorija/${category.slug.current}`}
              >
                {category.title}
              </Link>
            </Button>
          ))}
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-muted-foreground mb-4">
              Trenutno nema objavljenih članaka
            </h3>
            <p className="text-muted-foreground">
              Pratite nas za najnovije vesti i savete o deci i zdravlju.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {posts.map((post: Post) => (
              <Card
                key={post._id}
                className="hover:shadow-lg transition-shadow"
              >
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
                      {new Date(post.publishedAt).toLocaleDateString("sr-RS")}
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
        
        {/* Paginacija */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {page > 1 && (
              <Link
                href={`/blog?page=${page - 1}`}
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Prethodna
              </Link>
            )}
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/blog?page=${pageNum}`}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  pageNum === page
                    ? 'bg-primary text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </Link>
            ))}
            
            {page < totalPages && (
              <Link
                href={`/blog?page=${page + 1}`}
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Sledeća
              </Link>
            )}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <SectionHeader
          title="Blog"
          subtitle="Dete i zdravlje"
          icon={BookOpen}
        />
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-muted-foreground mb-4">
            Greška pri učitavanju bloga
          </h3>
          <p className="text-muted-foreground mb-6">
            Došlo je do greške pri učitavanju blog članaka.
          </p>
          <div className="bg-muted p-6 rounded-lg max-w-md mx-auto">
            <h4 className="font-medium mb-2">Da li je Sanity konfigurisan?</h4>
            <p className="text-sm text-muted-foreground">
              Proverite da li su environment varijable postavljene ispravno.
            </p>
            <code className="block text-xs bg-background p-2 rounded mt-2">
              NEXT_PUBLIC_SANITY_PROJECT_ID = {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nije postavljen"}
            </code>
          </div>
        </div>
      </div>
    );
  }
}
