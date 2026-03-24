import { Dealer } from "@/lib/types";

export default function DealerRatings({ dealer }: { dealer: Dealer }) {
  const { bbbRating, googleRating, trustpilotRating } = dealer;
  if (!bbbRating && !googleRating && !trustpilotRating) return null;

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
      {googleRating && (
        <span
          className="font-sans text-[11px] font-semibold inline-flex items-center gap-1"
          style={{ color: "#888" }}
        >
          <span style={{ color: "#C5A44E", fontSize: 11 }}>★</span>
          {googleRating} Google
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
