import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Powering Communities and Opportunities - Steem",
  description: "Steem is a social blockchain that grows communities and makes immediate revenue streams possible for users by rewarding them for sharing content.",
  keywords: "steem, blockchain, cryptocurrency, social media, rewards, content creation",
  authors: [{ name: "Steem Team" }],
  openGraph: {
    title: "Powering Communities and Opportunities - Steem",
    description: "Steem is a social blockchain that grows communities and makes immediate revenue streams possible for users by rewarding them for sharing content.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Powering Communities and Opportunities - Steem",
    description: "Steem is a social blockchain that grows communities and makes immediate revenue streams possible for users by rewarding them for sharing content.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}