import { client } from "@/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: any;
  publishedAt: string;
  image: string;
  author: string;
  categories: string[];
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post: Post = await client.fetch(`
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
    `, { slug: params.slug });

    if (!post) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <article className="max-w-4xl mx-auto">
          <Card className="mb-8">
            {post.image && (
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-3xl text-primary text-center">{post.title}</CardTitle>
              {post.author && (
                <p className="text-muted-foreground">
                  Autor: {post.author}
                </p>
              )}
              {post.publishedAt && (
                <p className="text-muted-foreground">
                  Objavljeno: {new Date(post.publishedAt).toLocaleDateString('sr-RS')}
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
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
} 