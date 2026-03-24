import { Dealer } from "@/lib/types";
import DealerRatings from "./DealerRatings";

export function isFeatured(dealer: Dealer): boolean {
  return !!(dealer.bbbRating || (dealer.googleRating && dealer.googleRating >= 4.5));
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
          {dealer.description.slice(0, 200)}
          {dealer.description.length > 200 ? "..." : ""}
        </p>
        <DealerRatings dealer={dealer} />
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
