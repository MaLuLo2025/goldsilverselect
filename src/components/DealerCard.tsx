import Link from "next/link";
import { Dealer } from "@/lib/types";
import DealerRatings from "./DealerRatings";

/** Featured requires BOTH a BBB rating AND Google 4.5+ */
export function isFeatured(dealer: Dealer): boolean {
  return !!(dealer.bbbRating && dealer.googleRating && dealer.googleRating >= 4.5);
}

/** Truncate at last complete sentence within maxLen chars */
export function truncateAtSentence(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  // Find the last sentence-ending punctuation
  const lastPeriod = cut.lastIndexOf(". ");
  const lastExcl = cut.lastIndexOf("! ");
  const lastEnd = Math.max(lastPeriod, lastExcl);
  if (lastEnd > maxLen * 0.4) {
    return text.slice(0, lastEnd + 1);
  }
  // Fallback: cut at last space
  const lastSpace = cut.lastIndexOf(" ");
  return lastSpace > 0 ? cut.slice(0, lastSpace) + "\u2026" : cut + "\u2026";
}

export default function DealerCard({
  dealer,
  featured,
}: {
  dealer: Dealer;
  featured?: boolean;
}) {
  return (
    <div
      className="intel-card"
      style={
        featured
          ? { borderLeft: "3px solid #C5A44E" }
          : undefined
      }
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-serif text-[19px] font-semibold text-gray-900">
            {dealer.name}
          </h3>
          {featured && (
            <span
              className="font-sans text-[9px] font-bold uppercase"
              style={{
                color: "#C5A44E",
                background: "rgba(197,164,78,0.1)",
                padding: "2px 7px",
                borderRadius: 3,
                letterSpacing: "0.06em",
                flexShrink: 0,
              }}
            >
              Featured
            </span>
          )}
        </div>
        <p
          className="font-sans text-[13px] leading-relaxed mb-1.5"
          style={{ color: "#777" }}
        >
          {truncateAtSentence(dealer.description, 300)}
        </p>
        <DealerRatings dealer={dealer} />
        {dealer.website && (
          <Link
            href={dealer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[12px] text-gold font-semibold no-underline hover:underline mt-1.5 inline-block"
          >
            {dealer.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} &rarr;
          </Link>
        )}
      </div>
      <div
        className="flex-shrink-0 self-center text-lg"
        style={{ color: "#ccc" }}
      >
        &rarr;
      </div>
    </div>
  );
}
