import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Margot Martin - Realtor",
  description: "Buy and Sell real estate with Margot Martin, Realtor at Grubb Co. Use our local expertise to find the next property you'll love.",
  metadataBase: new URL("https://margot-martin.com"),
  openGraph: {
    title: 'Margot Martin - Realtor',
    description: "Buy and Sell real estate with Margot Martin, Realtor at Grubb Co. Use our local expertise to find the next property you'll love.",
    url: 'https://margot-martin.com',
    siteName: 'Margot Martin - Realtor',
    images: [
      {
        url: 'https://images.brivityidx.com/assets/images/uploads/109779059/Margot.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://images.brivityidx.com/assets/images/uploads/109779059/Margot.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
