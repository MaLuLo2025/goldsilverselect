"use client";

import {
  trackVendorPhoneClick,
  trackVendorWebsiteClick,
  type LinkLocation,
} from "@/lib/analytics";

type Variant = "website" | "phone";

type Props = {
  variant: Variant;
  href: string;
  vendorName: string;
  vendorId?: string;
  linkLocation: LinkLocation;
  className?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function AnalyticsLink({
  variant,
  href,
  vendorName,
  vendorId,
  linkLocation,
  className,
  target,
  rel,
  style,
  children,
}: Props) {
  const handleClick = () => {
    if (variant === "website") {
      trackVendorWebsiteClick({ vendorName, vendorId, linkLocation });
    } else {
      trackVendorPhoneClick({ vendorName, vendorId, linkLocation });
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
