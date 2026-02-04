import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BarbellNearMe - Find. Compare. Lift. | Best Barbell Reviews 2026',
    template: '%s | BarbellNearMe',
  },
  description: 'Find the best barbells near you. Compare prices, specs, and reviews from top brands like Rogue, Eleiko, CAP & REP. Expert reviews, buying guides, and exclusive deals. Powered by TruGrit Fitness.',
  keywords: ['barbell', 'olympic barbell', 'powerlifting barbell', 'crossfit barbell', 'weightlifting bar', 'best barbell 2026', 'barbell reviews', 'buy barbell online', 'Rogue barbell', 'Eleiko barbell', 'barbell comparison', 'gym equipment'],
  authors: [{ name: 'BarbellNearMe' }],
  creator: 'BarbellNearMe',
  publisher: 'BarbellNearMe',
  openGraph: {
    title: 'BarbellNearMe - Find. Compare. Lift. | Best Barbell Reviews',
    description: 'Find the best barbells near you. Compare prices, specs, and reviews from top brands.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BarbellNearMe',
    images: [
      {
        url: 'https://barbellnearme.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BarbellNearMe - Your Guide to Finding the Perfect Barbell',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarbellNearMe - Find. Compare. Lift.',
    description: 'Find the best barbells. Compare prices, specs, and reviews from top brands.',
    images: ['https://barbellnearme.com/og-image.jpg'],
    creator: '@barbellnearme',
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
  alternates: {
    canonical: 'https://barbellnearme.com',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  category: 'fitness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://trugritfitness.pxf.io" />
        <link rel="preconnect" href="https://www.jdoqocy.com" />
        
        {/* Organization Schema - CRITICAL FOR LOCAL SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BarbellNearMe',
              url: 'https://barbellnearme.com',
              logo: 'https://barbellnearme.com/favicon.svg',
              description: 'Your ultimate guide to finding the perfect barbell. Compare prices, specs, and reviews from top brands.',
              sameAs: [
                'https://trugritfitness.pxf.io/Z6PKV1',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-BARBELL',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
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
        
        {/* Product Collection Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Barbell Collection',
              description: 'Browse our collection of barbells from top brands including Rogue, Eleiko, CAP, and REP.',
              url: 'https://barbellnearme.com/barbells',
              mainEntity: {
                '@type': 'ItemList',
                numberOfItems: 12,
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Rogue Ohio Bar' },
                  { '@type': 'ListItem', position: 2, name: 'Eleiko Olympic Weightlifting Bar' },
                  { '@type': 'ListItem', position: 3, name: 'CAP Barbell 20kg Bar' },
                ],
              },
            }),
          }}
        />
        
        {/* Breadcrumb Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://barbellnearme.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Barbells',
                  item: 'https://barbellnearme.com/barbells',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Compare',
                  item: 'https://barbellnearme.com/barbells/compare',
                },
              ],
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
