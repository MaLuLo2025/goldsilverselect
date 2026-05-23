import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gold Window | GoldSilverSelect",
  description: "Precious metals analytics — interactive charts for price history, ratios, macro indicators, miners, seasonality, and purchasing power.",
};

export default function SGIPage() {
  return (
    <iframe
      src="https://sgi-analytics.vercel.app/analytics"
      title="The Gold Window"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
