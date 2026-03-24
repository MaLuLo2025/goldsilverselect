import Link from "next/link";
import { Dealer } from "@/lib/types";
import DealerCard, { isFeatured } from "./DealerCard";

interface DealerListProps {
  dealers: Dealer[];
  linkPrefix?: string; // e.g. "/dealers/texas/austin" — card links to {prefix}/{slug}
  showLink?: boolean; // whether to wrap in a Link
}

export default function DealerList({
  dealers,
  linkPrefix,
  showLink = true,
}: DealerListProps) {
  const featured = dealers.filter(isFeatured);
  const standard = dealers.filter((d) => !isFeatured(d));

  return (
    <>
      {featured.length > 0 && (
        <div className="mb-8">
          <h3
            className="font-sans text-[11px] font-bold uppercase mb-3"
            style={{ color: "#C5A44E", letterSpacing: "0.08em" }}
          >
            Featured Dealers
          </h3>
          <div className="grid gap-3">
            {featured.map((dealer) =>
              showLink && linkPrefix ? (
                <Link
                  key={dealer.slug}
                  href={`${linkPrefix}/${dealer.slug}`}
                  className="no-underline block"
                >
                  <DealerCard dealer={dealer} featured />
                </Link>
              ) : (
                <DealerCard key={dealer.slug} dealer={dealer} featured />
              )
            )}
          </div>
        </div>
      )}

      {standard.length > 0 && (
        <div>
          {featured.length > 0 && (
            <h3
              className="font-sans text-[11px] font-bold uppercase mb-3"
              style={{ color: "#888", letterSpacing: "0.08em" }}
            >
              All Dealers
            </h3>
          )}
          <div className="grid gap-3">
            {standard.map((dealer) =>
              showLink && linkPrefix ? (
                <Link
                  key={dealer.slug}
                  href={`${linkPrefix}/${dealer.slug}`}
                  className="no-underline block"
                >
                  <DealerCard dealer={dealer} />
                </Link>
              ) : (
                <DealerCard key={dealer.slug} dealer={dealer} />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
