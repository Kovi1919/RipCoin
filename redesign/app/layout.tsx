import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "ripcoin.io";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    title: "RipCoin — Bury the hype. Back the community.",
    description:
      "RipCoin is a transparent, community-first Solana memecoin project built against rugs, insider games, and fake promises.",
    alternates: {
      canonical: "https://ripcoin.io",
    },
    openGraph: {
      title: "RipCoin — Bury the hype. Back the community.",
      description: "The memecoin for people who are done with rugs, insider games, and fake promises.",
      url: "https://ripcoin.io",
      siteName: "RipCoin",
      type: "website",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "RipCoin — Bury the hype. Back the community." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RipCoin — Bury the hype. Back the community.",
      description: "Public information. Fair access. Zero fake promises.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
