import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Directory",
    links: [
      { label: "Local Dealers", href: "/dealers" },
      { label: "Online Dealers", href: "/online-dealers" },
      { label: "Gold & Silver IRAs", href: "/gold-silver-iras" },
      { label: "Recycling", href: "/recycling" },
      { label: "Jewelry", href: "/jewelry" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Market Intelligence", href: "/intelligence" },
      { label: "Ratio Trading", href: "/blog/gold-silver-ratio-explained" },
      { label: "Scam Alerts", href: "/blog" },
      { label: "Buying Guide", href: "/blog" },
      { label: "IRA Guide", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1E1E1E", padding: "48px 24px 32px" }}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <Logo size={36} />
            <span className="font-serif text-lg font-bold text-white">
              GoldSilver<span className="text-gold">Select</span>
            </span>
          </div>
          <p
            className="font-sans text-[12.5px] leading-relaxed"
            style={{ color: "#777" }}
          >
            An independent directory of precious metals dealers, IRA custodians,
            recyclers, and jewelers. We don&apos;t sell metals. We help you find
            honest dealers who do.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h5
              className="font-sans font-bold uppercase mb-4"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#C5A44E",
              }}
            >
              {col.title}
            </h5>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[13px] no-underline mb-2 transition-colors duration-200 hover:text-white"
                style={{ color: "#888" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Financial Disclaimer */}
      <div
        className="max-w-[1100px] mx-auto"
        style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid #333" }}
      >
        <p
          className="font-sans text-[11px] leading-relaxed"
          style={{ color: "#555" }}
        >
          <strong style={{ color: "#777" }}>Financial Disclaimer:</strong>{" "}
          GoldSilverSelect does not provide financial, investment, or tax advice.
          Precious metals investing involves risk, including possible loss of principal.
          Past performance does not guarantee future results. Always consult a qualified
          financial advisor before making investment decisions. Nothing on this site
          constitutes a recommendation to buy, sell, or hold any precious metal,
          security, or investment product.
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1100px] mx-auto flex justify-between items-center"
        style={{
          marginTop: 20,
          paddingTop: 20,
          borderTop: "1px solid #2a2a2a",
        }}
      >
        <span className="font-sans text-[11px]" style={{ color: "#555" }}>
          © 2026 GoldSilverSelect.com — All rights reserved.
        </span>
        <span
          className="font-sans text-[10px] text-right max-w-[480px] leading-normal"
          style={{ color: "#444" }}
        >
          GoldSilverSelect is an independent directory. We do not sell precious
          metals, provide investment advice, or endorse any specific dealer. All
          information is for educational purposes only.
        </span>
      </div>
    </footer>
  );
}
