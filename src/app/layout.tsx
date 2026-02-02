export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'




// optimized metadata for seo
export const metadata: Metadata = {
  title: {
    default: 'Imo State Ministry of Livestock Development',
    template: '%s | Imo State Ministry of Livestock Development'
  },
  description: 'Official website of the Imo State Ministry of Livestock Development - providing livestock development services, animal health information, and agricultural support across Imo State, Nigeria.',
  keywords: ['Imo State Livestock', 'Ministry of Livestock', 'Livestock Nigeria', 'Animal Health Imo'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://livestock.im.gov.ng',
    siteName: 'Imo State Ministry of Livestock Development',
    title: 'Imo State Ministry of Livestock Development',
    description: 'Official website of the Imo State Ministry of Livestock Development - providing livestock development services, animal health information, and agricultural support across Imo State, Nigeria.',
    images: [
      {
        url: 'https://health.im.gov.ng/images/IMSG-Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Imo State Ministry of Livestock Development',
      }
    ],
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
    google: '_7c1t_i-UsjS1_BD_kE-vsXMUak-mgMUnIT91dEUEQ4',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
