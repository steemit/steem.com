import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-roboto',
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
        <link rel="stylesheet" href="https://use.typekit.net/qhy4act.css" />
      </head>
      <body className={`${roboto.className} ${roboto.variable}`}>
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9ZPVZV9X5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y9ZPVZV9X5');
          `}
        </Script>
      </body>
    </html>
  );
}