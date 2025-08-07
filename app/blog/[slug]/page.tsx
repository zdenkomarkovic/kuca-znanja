// app/blog/[slug]/page.tsx
import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";

// Tip parametara koji Next.js očekuje
type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const post: Post | null = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      publishedAt,
      "image": mainImage.asset->url,
      "author": author->name,
      "categories": categories[]->title
    }
  `,
    { slug: params.slug }
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <article className="max-w-4xl mx-auto">
        <Card className="mb-8">
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
            <CardTitle className="text-3xl text-primary text-center">
              {post.title}
            </CardTitle>
            {post.author && (
              <p className="text-muted-foreground">Autor: {post.author}</p>
            )}
            {post.publishedAt && (
              <p className="text-muted-foreground">
                Objavljeno:{" "}
                {new Date(post.publishedAt).toLocaleDateString("sr-RS")}
              </p>
            )}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.categories.map((cat: string, index: number) => (
                  <span
                    key={index}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
          </CardHeader>
          <CardContent>
            {post.body && (
              <div className="prose prose-lg max-w-none">
                <PortableText value={post.body} />
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <Link
            href="/blog"
            className="text-primary hover:underline font-medium"
          >
            ← Nazad na blog
          </Link>
        </div>
      </article>
    </div>
  );
}

// SSG za sve dostupne slugove
export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(`
    *[_type == "post"] {
      slug { current }
    }
  `);

  return slugs.map((slugObj) => ({
    slug: slugObj.slug.current,
  }));
}
