const TGW_URL =
  "https://thegoldwindow.ai/?utm_source=goldsilverselect&utm_medium=header-banner&utm_campaign=cross-promo";

export default function CrossPromoBanner() {
  return (
    <a
      href={TGW_URL}
      rel="noopener"
      aria-label="Visit TheGoldWindow.ai for free AI-assisted precious metals analytics"
      className="block text-center no-underline border-b-[3px] border-gold py-3.5 px-4 sm:py-4 sm:px-[22px]"
      style={{ background: "#1a1a17" }}
    >
      <div
        className="font-sans uppercase text-[9px] sm:text-[10px] tracking-[2.5px] sm:tracking-[3px] mb-1.5"
        style={{ color: "#C5A44E" }}
      >
        From our team
      </div>
      <div
        className="font-serif text-[15px] sm:text-[17px]"
        style={{ lineHeight: 1.45 }}
      >
        <span className="text-cream">Do you want </span>
        <span className="text-white italic">
          AI-assisted institutional-level charting and analytics?
        </span>
        <span className="text-cream"> Visit </span>
        <span className="text-gold underline underline-offset-4 decoration-1">
          TheGoldWindow.ai
        </span>
      </div>
    </a>
  );
}
