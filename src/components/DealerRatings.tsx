import { Dealer } from "@/lib/types";
import { googleRatingLabel } from "@/lib/ratings";

export default function DealerRatings({ dealer }: { dealer: Dealer }) {
  const { bbbRating, trustpilotRating } = dealer;
  // Google badge needs a confirmed review count; otherwise it is hidden
  const googleLabel =
    dealer.googleRating && dealer.googleReviewCount
      ? googleRatingLabel(dealer.googleRating, dealer.googleReviewCount)
      : null;
  if (!bbbRating && !googleLabel && !trustpilotRating) return null;

  return (
    <div className="flex gap-3 flex-wrap mt-2">
      {bbbRating && (
        <span
          className="font-sans text-[11px] font-semibold inline-flex items-center gap-1"
          style={{ color: "#888" }}
        >
          <span
            style={{
              background: "#1B3D2F",
              color: "#fff",
              padding: "1px 5px",
              borderRadius: 2,
              fontSize: 10,
              fontWeight: 700,
            }}
          >
            BBB
          </span>
          {bbbRating}
        </span>
      )}
      {googleLabel && (
        <span
          className="font-sans text-[11px] font-semibold inline-flex items-center gap-1"
          style={{ color: "#888" }}
        >
          <span style={{ color: "#C5A44E", fontSize: 11 }}>★</span>
          {googleLabel}
        </span>
      )}
      {trustpilotRating && (
        <span
          className="font-sans text-[11px] font-semibold inline-flex items-center gap-1"
          style={{ color: "#888" }}
        >
          <span style={{ color: "#C5A44E", fontSize: 11 }}>★</span>
          {trustpilotRating} Trustpilot
        </span>
      )}
    </div>
  );
}
