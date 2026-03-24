"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { faqCategories } from "@/lib/faq";

export default function FAQContent() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const query = search.toLowerCase().trim();

  const filteredCategories = useMemo(() => {
    if (!query) return faqCategories;
    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  function toggleItem(key: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
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
            style={{
              color: "#999",
              background: "none",
              border: "none",
              padding: "4px 8px",
              lineHeight: 1,
            }}
          >
            &times;
          </button>
        )}
      </div>

      {/* Category jump links */}
      {!query && (
        <div className="flex gap-2 flex-wrap mb-8">
          {faqCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="font-sans text-[12px] font-semibold no-underline rounded-full transition-all duration-200 hover:border-gold hover:text-gold"
              style={{
                color: "#888",
                border: "1.5px solid #d5d0c5",
                padding: "6px 14px",
                letterSpacing: "0.04em",
              }}
            >
              {cat.title}
            </a>
          ))}
        </div>
      )}

      {/* No results */}
      {query && totalResults === 0 && (
        <div className="text-center py-12">
          <p className="font-sans text-[15px]" style={{ color: "#999" }}>
            No matching questions found. Try different keywords, or browse the
            categories below.
          </p>
          <button
            onClick={() => setSearch("")}
            className="btn-outline mt-4 no-underline inline-block cursor-pointer"
          >
            Show All Questions
          </button>
        </div>
      )}

      {/* FAQ Categories */}
      {filteredCategories.map((cat) => (
        <div key={cat.id} id={cat.id} className="mb-10">
          <h2
            className="font-serif text-[22px] font-bold mb-4"
            style={{ color: "#C5A44E" }}
          >
            {cat.title}
          </h2>
          <div
            className="rounded-md overflow-hidden"
            style={{ border: "1px solid #e8e5dd" }}
          >
            {cat.items.map((item, i) => {
              const key = `${cat.id}-${i}`;
              const isOpen = openItems.has(key);
              return (
                <div
                  key={key}
                  style={{
                    borderTop: i > 0 ? "1px solid #e8e5dd" : undefined,
                  }}
                >
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
                      style={{
                        padding: "0 20px 20px",
                        color: "#555",
                        background: "#FAFAF5",
                      }}
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
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
