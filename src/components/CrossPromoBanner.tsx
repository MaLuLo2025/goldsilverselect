const TGW_URL =
  "https://thegoldwindow.ai/?utm_source=goldsilverselect&utm_medium=header-banner&utm_campaign=cross-promo";

export default function CrossPromoBanner() {
  return (
    <a
      href={TGW_URL}
      rel="noopener"
      aria-label="Visit TheGoldWindow.ai for free AI-assisted precious metals analytics"
      className="group block bg-forest no-underline"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 text-center py-2.5 sm:py-3 px-4 font-sans text-[14px]">
        <span className="text-cream">
          Want deeper analysis than a ticker can show? Try our free AI-assisted metals analytics →
        </span>
        <span className="text-gold font-semibold whitespace-nowrap group-hover:underline">
          TheGoldWindow.ai
        </span>
      </div>
    </a>
  );
}
