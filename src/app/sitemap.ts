import { MetadataRoute } from "next";
import { states } from "@/lib/states";
import { cities } from "@/lib/cities";
import { dealers } from "@/lib/dealers";
import { blogPosts } from "@/lib/blog";

const BASE = "https://goldsilverselect.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    "",
    "/dealers",
    "/online-dealers",
    "/gold-silver-iras",
    "/recycling",
    "/jewelry",
    "/intelligence",
    "/blog",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" as const : "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // State pages
  const statePages = states.map((s) => ({
    url: `${BASE}/dealers/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // City pages
  const cityPages = cities.map((c) => ({
    url: `${BASE}/dealers/${c.stateSlug}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Dealer pages (local dealers with addresses)
  const dealerPages = dealers
    .filter((d) => d.address)
    .map((d) => ({
      url: `${BASE}/dealers/${d.stateSlug}/${d.citySlug}/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  // Blog pages
  const blogPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...statePages, ...cityPages, ...dealerPages, ...blogPages];
}
