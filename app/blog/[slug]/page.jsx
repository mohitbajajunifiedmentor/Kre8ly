import BlogDetailPageClient from "./BlogDetailPageClient";
import { buildBlogMetadata } from "@/lib/blog-metadata";

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildBlogMetadata(slug);
}

export default function Page() {
  return <BlogDetailPageClient />;
}
