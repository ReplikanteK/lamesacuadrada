"use client";

import { trackAmazonClick } from "@/lib/analytics";

type Props = {
  href: string;
  slug: string;
  price: string;
  location: "card" | "ficha" | "vs";
  page: string;
  className?: string;
  children: React.ReactNode;
};

function getAsin(url: string): string {
  const m = url.match(/\/dp\/([A-Z0-9]{10})/);
  return m ? m[1] : "";
}

export function AmazonLink({ href, slug, price, location, page, className, children }: Props) {
  const asin = getAsin(href);
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className={className}
      onClick={() => {
        trackAmazonClick({ slug, price, asin, location, page });
      }}
    >
      {children}
    </a>
  );
}
