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

// Funkcija za generisanje slug-a bez srpskih slova
function generateSlug(text: string): string {
  const serbianChars: { [key: string]: string } = {
    'č': 'c', 'ć': 'c', 'š': 's', 'đ': 'd', 'ž': 'z',
    'Č': 'C', 'Ć': 'C', 'Š': 'S', 'Đ': 'D', 'Ž': 'Z'
  };
  
  let slug = text;
  
  // Zameni srpska slova
  Object.entries(serbianChars).forEach(([serbian, latin]) => {
    slug = slug.replace(new RegExp(serbian, 'g'), latin);
  });
  
  // Konvertuj u lowercase i zameni razmake sa crticama
  return slug.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default async function BlogPage() {
  try {
    // Proveri da li je Sanity konfigurisan
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "demo-project") {
      throw new Error("Sanity not configured");
    }
    
    // Prvo probaj sa published filterom - povećavam limit na 1000
    let posts = await client.fetch(`
      *[_type == "post" && published == true] | order(publishedAt desc) [0...1000] {
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
    
    console.log('Postovi sa published filterom:', posts?.length || 0);
    console.log('Svi postovi:', posts);
    
    // Ako nema postova sa published filterom, probaj bez njega
    if (!posts || posts.length === 0) {
      console.log('Nema postova sa published filterom, probajem bez njega...');
      posts = await client.fetch(`
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
      `);
      console.log('Postovi bez published filtera:', posts?.length || 0);
    }
    
    // Ako i dalje nema postova, probaj sa većim limitom
    if (!posts || posts.length === 0) {
      console.log('Nema postova ni sa većim limitom, probajem sa 1000...');
      posts = await client.fetch(`
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
      `);
      console.log('Postovi sa limitom 1000:', posts?.length || 0);
    }

    const categories = await getCategories();

  return (
      <div className="container mx-auto px-4 py-8 pt-20">
        <SectionHeader title="Blog" icon={BookOpen} />

        {/* Filter dugmad */}
        <div className="flex flex-wrap gap-2 mt-8 mb-6">
          {categories.map((category: Category) => (
            <Button key={category._id} variant="outline" size="sm" asChild>
              <Link
                href={`/blog/kategorija/${generateSlug(category.title)}`}
              >
                {category.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* Info */}
        <div className="text-center mb-4 text-sm text-muted-foreground">
          Pronađeno {posts.length} članaka
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
            Trenutno ne možemo da učitamo blog članke. Molimo pokušajte kasnije.
          </p>
          <div className="bg-muted p-6 rounded-lg max-w-md mx-auto">
            <h4 className="font-medium mb-2">Da li je Sanity konfigurisan?</h4>
            <p className="text-sm text-muted-foreground">
              Proverite da li imate pravilno konfigurisan .env.local fajl sa:
            </p>
            <code className="block text-xs bg-background p-2 rounded mt-2">
              NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
            </code>
          </div>
        </div>
    </div>
  );
  }
}
