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

export const metadata = {
  title: {
    default: "Indiebox Productions | Music Production, Mixing & Mastering, Artist Booking India",
    template: "%s | Indiebox Productions"
  },
  description: "Indiebox Productions is India's premier independent music production house. We offer world-class music production, mixing & mastering, cinematic video production, artist booking, sync licensing, and creative direction for indie artists.",
  keywords: [
    "music production house India",
    "indie music production",
    "mixing and mastering India",
    "artist booking India",
    "music video production",
    "sync licensing India",
    "independent music label India",
    "Indiebox Productions",
    "Jatin Arya",
    "Gumshuda song",
    "Mahiya Ve song",
    "indie artist India",
    "creative direction music",
    "brand partnership music",
    "music production company Delhi",
    "record label India",
    "music mastering services",
    "cinematic video production India"
  ],
  authors: [{ name: "Indiebox Productions", url: "https://indieboxproductions.com" }],
  creator: "Indiebox Productions",
  publisher: "Indiebox Productions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indieboxproductions.com",
    siteName: "Indiebox Productions",
    title: "Indiebox Productions | Music Production, Mixing & Mastering, Artist Booking India",
    description: "India's premier independent music production house. Music production, mixing & mastering, artist booking, video production, and sync licensing.",
    images: [
      {
        url: "/logoofindiepng.png",
        width: 1200,
        height: 630,
        alt: "Indiebox Productions - Music Production House India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indiebox Productions | Music Production House India",
    description: "India's premier independent music production house. Music production, mixing & mastering, artist booking, and more.",
    images: ["/logoofindiepng.png"],
    creator: "@indieboxprod",
  },
  icons: {
    icon: "/logoofindiepng.png",
    shortcut: "/logoofindiepng.png",
    apple: "/logoofindiepng.png",
  },
  category: "music",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
