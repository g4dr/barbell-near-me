import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BarbellNearMe - Find. Compare. Lift.',
    template: '%s | BarbellNearMe',
  },
  description: 'Find the best barbells near you. Compare prices, specs, and reviews from top brands like Rogue, Eleiko, CAP & REP. Powered by TruGrit Fitness.',
  keywords: ['barbell', 'olympic bar', 'powerlifting bar', 'crossfit bar', 'gym equipment', 'weightlifting bar', 'buy barbell', 'barbell reviews', 'best barbell'],
  authors: [{ name: 'BarbellNearMe' }],
  openGraph: {
    title: 'BarbellNearMe - Find. Compare. Lift.',
    description: 'Find the best barbells near you. Compare prices, specs, and reviews.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BarbellNearMe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarbellNearMe - Find. Compare. Lift.',
    description: 'Find the best barbells near you. Powered by TruGrit Fitness.',
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BarbellNearMe',
              url: 'https://barbellnearme.com',
              logo: 'https://barbellnearme.com/favicon.svg',
              description: 'Your ultimate guide to finding the perfect barbell.',
              sameAs: [
                'https://trugritfitness.pxf.io/Z6PKV1',
              ],
            }),
          }}
        />
        
        {/* WebSite Schema with Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'BarbellNearMe',
              url: 'https://barbellnearme.com/',
              description: 'Find. Compare. Lift. Your ultimate guide to finding the perfect barbell.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://barbellnearme.com/barbells?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        
        {/* Product Schema for Barbells */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Barbell Collection',
              description: 'Browse our collection of barbells from top brands including Rogue, Eleiko, CAP, and REP.',
              url: 'https://barbellnearme.com/barbells',
            }),
          }}
        />
      </head>
      <body className="bg-iron-900 text-white min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
