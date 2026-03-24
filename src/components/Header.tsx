import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { label: "Dealers", href: "/dealers" },
  { label: "Online Dealers", href: "/online-dealers" },
  { label: "Gold IRAs", href: "/gold-silver-iras" },
  { label: "Recycling", href: "/recycling" },
  { label: "Jewelry", href: "/jewelry" },
  { label: "Intelligence", href: "/intelligence", highlight: true },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  return (
    <header
      className="bg-cream"
      style={{ borderBottom: "1px solid #e8e5dd", padding: "14px 24px" }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Logo size={42} />
          <div>
            <div className="font-serif text-[22px] font-bold text-gray-900 leading-tight">
              GoldSilver<span className="text-gold">Select</span>
            </div>
            <div
              className="font-sans uppercase"
              style={{
                fontSize: 9.5,
                color: "#999",
                letterSpacing: "0.12em",
                marginTop: 1,
              }}
            >
              Know the market · Own with confidence
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`no-underline text-[13px] transition-colors duration-200 hover:text-gold ${
                item.highlight
                  ? "text-gold font-semibold"
                  : "text-gray-500 font-medium"
              }`}
              style={{ letterSpacing: "0.02em" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
