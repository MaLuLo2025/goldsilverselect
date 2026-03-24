import { Metadata } from "next";
import Link from "next/link";
import TickerBanner from "@/components/TickerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Precious Metals Education & Scam Alerts",
  description:
    "Research, education, and consumer protection content for precious metals buyers. Premiums explained, scam alerts, ratio trading, and more.",
};

export default function BlogPage() {
  return (
    <>
      <TickerBanner />
      <Header />

      <section
        className="text-center"
        style={{
          padding: "56px 24px 48px",
          background: "linear-gradient(180deg, #FAFAF5 0%, #F5F2EB 100%)",
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <div className="gs-divider" />
          <h1 className="font-serif text-[38px] font-bold text-gray-900 mb-3">
            Research &amp; Warnings
          </h1>
          <p className="font-sans text-[16px] leading-relaxed max-w-[560px] mx-auto" style={{ color: "#666" }}>
            Education, scam alerts, and market analysis for precious metals
            buyers. We summarize and synthesize — we never advocate or opine.
          </p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto" style={{ padding: "40px 24px 64px" }}>
        <div className="grid gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="intel-card no-underline"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-sans text-[10px] font-bold uppercase"
                    style={{
                      letterSpacing: "0.08em",
                      color: post.tagColor === "gold" ? "#C5A44E" : "#1B3D2F",
                      background:
                        post.tagColor === "gold"
                          ? "rgba(197,164,78,0.1)"
                          : "rgba(27,61,47,0.08)",
                      padding: "2px 8px",
                      borderRadius: 3,
                    }}
                  >
                    {post.tag}
                  </span>
                  {post.series && (
                    <span className="font-sans text-[11px]" style={{ color: "#aaa" }}>
                      Series: {post.series}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-[19px] font-semibold text-gray-900 leading-snug mb-1.5">
                  {post.title}
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed" style={{ color: "#777" }}>
                  {post.excerpt}
                </p>
              </div>
              <div className="flex-shrink-0 self-center text-lg" style={{ color: "#ccc" }}>
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
