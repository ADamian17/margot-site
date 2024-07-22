import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { createTheme, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import "@/styles/main.scss";

const mulish = Mulish({ subsets: ["latin"] });

const theme = createTheme({
  white: "#fff",
  black: "#333",
  breakpoints: {
    xs: '360px',
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '90em',
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "1208px",
  },
  headings: {
    fontFamily: "inherit",
    fontWeight: "inherit",
    sizes: {
      h1: {
        fontSize: "48px",
        lineHeight: "1.2",
        fontWeight: "400",
      },
    }
  },
});

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
      <body className={mulish.className}>
        <MantineProvider defaultColorScheme="light" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
