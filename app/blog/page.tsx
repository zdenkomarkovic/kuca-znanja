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

export default async function BlogPage() {
  try {
    // Proveri da li je Sanity konfigurisan
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "demo-project") {
      throw new Error("Sanity not configured");
    }
    
    const [posts, categories] = await Promise.all([
      client.fetch(`
        *[_type == "post"] | order(publishedAt desc) [0...1000] {
          _id,
          title,
          slug,
          body,
          publishedAt,
          "image": mainImage.asset->url,
          "author": author->name,
          "categories": categories[]->title
        }
      `),
      getCategories(),
    ]);

    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <SectionHeader title="Blog" icon={BookOpen} />

        {/* Filter dugmad */}
        <div className="flex flex-wrap gap-2 mt-8 mb-6">
          {categories.map((category: Category) => (
            <Button key={category._id} variant="outline" size="sm" asChild>
              <Link
                href={`/blog/kategorija/${category.slug.toLowerCase().replace(/\s+/g, "-")}`}
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
