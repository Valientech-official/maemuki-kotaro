import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "まえむき | 失業給付金申請サポート",
    template: "%s | まえむき"
  },
  description: "失業給付金の申請をプロがサポート。受給額の最大化や申請手続きの代行で、あなたの転職活動を経済的にサポートします。LINEで無料診断実施中。",
  keywords: ["失業給付金", "失業保険", "転職支援", "申請サポート", "受給額診断", "まえむき"],
  authors: [{ name: "まえむき" }],
  creator: "まえむき",
  publisher: "まえむき",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://maemuki.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "まえむき | 失業給付金申請サポート",
    description: "失業給付金の申請をプロがサポート。受給額の最大化や申請手続きの代行で、あなたの転職活動を経済的にサポートします。",
    url: 'https://maemuki.vercel.app',
    siteName: 'まえむき',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'まえむき - 失業給付金申請サポート',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "まえむき | 失業給付金申請サポート",
    description: "失業給付金の申請をプロがサポート。LINEで無料診断実施中。",
    images: ['/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // 実際のGoogle Search Console認証コードに置き換え
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#e46421',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="facebook-domain-verification"
          content="30xzlab3t2dfzumqlsbd36kvb6v77n"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5438HM2H');`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "まえむき",
              "description": "失業給付金申請サポートサービス",
              "url": "https://maemuki.vercel.app",
              "logo": "https://maemuki.vercel.app/android-chrome-512x512.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Japanese"
              },
              "areaServed": "JP",
              "serviceType": "失業給付金申請サポート"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5438HM2H"
            height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
