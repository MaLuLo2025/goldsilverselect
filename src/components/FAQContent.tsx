"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { faqCategories, FAQItem } from "@/lib/faq";
import { blogPosts } from "@/lib/blog";
import { intelligenceItems } from "@/lib/intelligence";
import { intelligenceSummaries } from "@/lib/intelligence-summaries";

// Normalize text for fuzzy matching: lowercase, remove hyphens, handle plurals
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[-–—]/g, " ") // hyphens to spaces
    .replace(/['']/g, "") // smart quotes
    .replace(/[^a-z0-9\s]/g, "") // remove punctuation
    .replace(/\s+/g, " ")
    .trim();
}

// Strip trailing 's' for basic plural matching
function stem(word: string): string {
  if (word.length > 3 && word.endsWith("s")) return word.slice(0, -1);
  if (word.length > 4 && word.endsWith("es")) return word.slice(0, -2);
  return word;
}

// Score how many query words match in a text (word-independent matching)
function scoreMatch(text: string, queryWords: string[]): number {
  const normalized = normalize(text);
  let score = 0;
  for (const word of queryWords) {
    const stemmed = stem(word);
    if (normalized.includes(word)) score += 2; // exact word match
    else if (normalized.includes(stemmed)) score += 1; // stem match
  }
  return score;
}

interface ScoredFAQ {
  item: FAQItem;
  catId: string;
  catTitle: string;
  originalIndex: number;
  score: number;
}

interface ScoredBlog {
  slug: string;
  title: string;
  excerpt: string;
  score: number;
}

interface ScoredVideo {
  slug: string;
  title: string;
  speaker: string;
  source: string;
  type: string;
  description: string;
  score: number;
}

export default function FAQContent() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const query = search.trim();
  const queryWords = useMemo(
    () =>
      normalize(query)
        .split(" ")
        .filter((w) => w.length >= 2),
    [query]
  );
  const isSearching = queryWords.length > 0;

  // Scored FAQ results
  const scoredFAQs = useMemo<ScoredFAQ[]>(() => {
    if (!isSearching) return [];
    const results: ScoredFAQ[] = [];
    faqCategories.forEach((cat) => {
      cat.items.forEach((item, i) => {
        const qScore = scoreMatch(item.question, queryWords) * 2; // question matches weighted higher
        const aScore = scoreMatch(item.answer, queryWords);
        const total = qScore + aScore;
        if (total > 0) {
          results.push({
            item,
            catId: cat.id,
            catTitle: cat.title,
            originalIndex: i,
            score: total,
          });
        }
      });
    });
    return results.sort((a, b) => b.score - a.score);
  }, [isSearching, queryWords]);

  // Scored blog results
  const scoredBlogs = useMemo<ScoredBlog[]>(() => {
    if (!isSearching) return [];
    const results: ScoredBlog[] = [];
    blogPosts.forEach((post) => {
      const tScore = scoreMatch(post.title, queryWords) * 3;
      const eScore = scoreMatch(post.excerpt, queryWords);
      const total = tScore + eScore;
      if (total > 0) {
        results.push({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          score: total,
        });
      }
    });
    return results.sort((a, b) => b.score - a.score).slice(0, 5);
  }, [isSearching, queryWords]);

  // Scored video/research results
  const scoredVideos = useMemo<ScoredVideo[]>(() => {
    if (!isSearching) return [];
    const results: ScoredVideo[] = [];
    intelligenceItems.forEach((item) => {
      const tScore = scoreMatch(item.title, queryWords) * 3;
      const sScore = scoreMatch(item.speaker, queryWords) * 2;
      const dScore = scoreMatch(item.description, queryWords);
      const tagScore = scoreMatch(item.tag, queryWords);
      // Also search the editorial summary if it exists
      const summary = intelligenceSummaries[item.slug] || "";
      const sumScore = scoreMatch(summary, queryWords);
      const total = tScore + sScore + dScore + tagScore + sumScore;
      if (total > 0) {
        results.push({
          slug: item.slug,
          title: item.title,
          speaker: item.speaker,
          source: item.source,
          type: item.type,
          description: item.description,
          score: total,
        });
      }
    });
    return results.sort((a, b) => b.score - a.score).slice(0, 5);
  }, [isSearching, queryWords]);

  // Filtered categories for non-search view
  const filteredCategories = useMemo(() => {
    if (isSearching) return []; // handled by scoredFAQs
    return faqCategories;
  }, [isSearching]);

  function toggleItem(key: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function renderFAQItem(item: FAQItem, key: string) {
    const isOpen = openItems.has(key);
    return (
      <div key={key} style={{ borderTop: "1px solid #e8e5dd" }}>
        <button
          onClick={() => toggleItem(key)}
          className="w-full text-left flex items-start justify-between gap-4 cursor-pointer"
          style={{
            padding: "16px 20px",
            background: isOpen ? "#FAFAF5" : "#fff",
            border: "none",
            transition: "background 0.15s",
          }}
        >
          <span className="font-serif text-[16px] font-semibold text-gray-900 leading-snug">
            {item.question}
          </span>
          <span
            className="flex-shrink-0 font-sans text-[18px] leading-none mt-0.5"
            style={{
              color: "#C5A44E",
              transition: "transform 0.2s",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "2000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
        >
          <div
            className="font-sans text-[14.5px] leading-[1.75]"
            style={{ padding: "0 20px 20px", color: "#555", background: "#FAFAF5" }}
          >
            <p>{item.answer}</p>
            {item.links && item.links.length > 0 ? (
              <div className="flex flex-col gap-1.5 mt-3">
                {item.links.map((link, li) => (
                  <Link
                    key={li}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-sans text-[13px] font-semibold text-gold no-underline hover:underline"
                  >
                    {link.label} &rarr;
                  </Link>
                ))}
              </div>
            ) : item.learnMoreHref ? (
              <Link
                href={item.learnMoreHref}
                target={item.learnMoreHref.startsWith("http") ? "_blank" : undefined}
                rel={item.learnMoreHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-sans text-[13px] font-semibold text-gold no-underline hover:underline inline-block mt-3"
              >
                Learn more: {item.learnMoreLabel} &rarr;
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-[800px] mx-auto" style={{ padding: "32px 24px 48px" }}>
      {/* Search bar */}
      <div className="relative mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search our knowledge base \u2014 type a question or keyword"
          className="w-full font-sans text-[14px] rounded-md"
          style={{
            padding: "14px 40px 14px 16px",
            border: "1.5px solid #d5d0c5",
            background: "#fff",
            color: "#333",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#C5A44E")}
          onBlur={(e) => (e.target.style.borderColor = "#d5d0c5")}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 font-sans text-[16px] cursor-pointer"
            style={{ color: "#999", background: "none", border: "none", padding: "4px 8px", lineHeight: 1 }}
          >
            &times;
          </button>
        )}
      </div>

      {/* Category jump links — only when not searching */}
      {!isSearching && (
        <div className="flex gap-2 flex-wrap mb-8">
          {faqCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="font-sans text-[12px] font-semibold no-underline rounded-full transition-all duration-200 hover:border-gold hover:text-gold"
              style={{ color: "#888", border: "1.5px solid #d5d0c5", padding: "6px 14px", letterSpacing: "0.04em" }}
            >
              {cat.title}
            </a>
          ))}
        </div>
      )}

      {/* Search results — ranked by relevance */}
      {isSearching && (
        <>
          {scoredFAQs.length > 0 ? (
            <div className="mb-10">
              <p className="font-sans text-[13px] mb-4" style={{ color: "#888" }}>
                {scoredFAQs.length} question{scoredFAQs.length !== 1 ? "s" : ""} matching &ldquo;{query}&rdquo;
              </p>
              <div className="rounded-md overflow-hidden" style={{ border: "1px solid #e8e5dd" }}>
                {scoredFAQs.map((sf, i) =>
                  renderFAQItem(sf.item, `search-${i}`)
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 mb-6">
              <p className="font-sans text-[15px] mb-2" style={{ color: "#999" }}>
                No matching questions found for &ldquo;{query}&rdquo;.
              </p>
              <p className="font-sans text-[13px]" style={{ color: "#aaa" }}>
                Try different keywords, or browse the categories below.
              </p>
              <button
                onClick={() => setSearch("")}
                className="btn-outline mt-4 no-underline inline-block cursor-pointer"
              >
                Show All Questions
              </button>
            </div>
          )}

          {/* Related blog articles */}
          {scoredBlogs.length > 0 && (
            <div className="mb-10">
              <h3 className="font-serif text-[18px] font-bold mb-3" style={{ color: "#C5A44E" }}>
                Related Articles
              </h3>
              <div className="grid gap-3">
                {scoredBlogs.map((blog) => (
                  <Link key={blog.slug} href={`/blog/${blog.slug}`} className="blog-card no-underline block">
                    <h4 className="font-serif text-[16px] font-semibold text-gray-900 mb-1">{blog.title}</h4>
                    <p className="font-sans text-[13px] leading-relaxed" style={{ color: "#777" }}>{blog.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related videos */}
          {scoredVideos.length > 0 && (
            <div className="mb-10">
              <h3 className="font-serif text-[18px] font-bold mb-3" style={{ color: "#C5A44E" }}>
                Videos &amp; Research
              </h3>
              <div className="grid gap-3">
                {scoredVideos.map((video) => (
                  <Link
                    key={video.slug}
                    href={`/intelligence/${video.slug}`}
                    className="blog-card no-underline block"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-sans text-[9px] font-bold uppercase"
                        style={{
                          color: video.type === "video" ? "#C5A44E" : "#1B3D2F",
                          background: video.type === "video" ? "rgba(197,164,78,0.1)" : "rgba(27,61,47,0.08)",
                          padding: "2px 6px",
                          borderRadius: 3,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {video.type}
                      </span>
                      <span className="font-sans text-[11px]" style={{ color: "#aaa" }}>{video.source}</span>
                    </div>
                    <h4 className="font-serif text-[16px] font-semibold text-gray-900 mb-1">{video.title}</h4>
                    <p className="font-sans text-[12px] font-semibold" style={{ color: "#C5A44E" }}>{video.speaker}</p>
                    <p className="font-sans text-[13px] leading-relaxed mt-1" style={{ color: "#777" }}>
                      {video.description.slice(0, 150)}{video.description.length > 150 ? "\u2026" : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Full FAQ categories — only when not searching */}
      {!isSearching &&
        filteredCategories.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-10">
            <h2 className="font-serif text-[22px] font-bold mb-4" style={{ color: "#C5A44E" }}>
              {cat.title}
            </h2>
            <div className="rounded-md overflow-hidden" style={{ border: "1px solid #e8e5dd" }}>
              {cat.items.map((item, i) =>
                renderFAQItem(item, `${cat.id}-${i}`)
              )}
            </div>
          </div>
        ))}
    </section>
  );
}
