import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BarbellNearMe - Find. Compare. Lift. | Best Barbell Reviews 2026',
    template: '%s | BarbellNearMe',
  },
  description: 'Find the best barbells near you. Compare prices, specs, and reviews from top brands like Rogue, Eleiko, CAP & REP. Expert reviews, buying guides, and exclusive deals. Powered by TruGrit Fitness.',
  keywords: ['barbell', 'olympic barbell', 'powerlifting barbell', 'crossfit barbell', 'weightlifting bar', 'best barbell 2026', 'barbell reviews', 'buy barbell online', 'Rogue barbell', 'Eleiko barbell', 'barbell comparison', 'gym equipment', 'weightlifting equipment', 'home gym barbell', 'commercial gym barbell'],
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K29MJVMX51"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K29MJVMX51');
            `,
          }}
        />
        
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
                numberOfItems: 50,
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Rogue Ohio Bar', url: 'https://barbellnearme.com/products/olympic' },
                  { '@type': 'ListItem', position: 2, name: 'Eleiko Weightlifting Bar', url: 'https://barbellnearme.com/products/olympic' },
                  { '@type': 'ListItem', position: 3, name: 'Rogue Bella Bar', url: 'https://barbellnearme.com/products/womens' },
                  { '@type': 'ListItem', position: 4, name: 'Rep Olympic Bar', url: 'https://barbellnearme.com/products/olympic' },
                  { '@type': 'ListItem', position: 5, name: 'CAP Barbell 20kg', url: 'https://barbellnearme.com/products/budget' },
                ],
              },
            }),
          }}
        />
        
        {/* Product Schema for Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Best Barbells 2026',
              description: 'Top-rated barbells for every lifting style and budget.',
              url: 'https://barbellnearme.com/best',
              itemListElement: [
                {
                  '@type': 'Product',
                  position: 1,
                  name: 'Rogue Olympic Bar 2.0',
                  description: 'Best overall Olympic bar with 28mm shaft and hybrid knurl.',
                  brand: { '@type': 'Brand', name: 'Rogue' },
                  offers: {
                    '@type': 'Offer',
                    price: '295.00',
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://trugritfitness.pxf.io/Z6PKV1',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '2847',
                  },
                },
                {
                  '@type': 'Product',
                  position: 2,
                  name: 'Eleiko Weightlifting Bar',
                  description: 'Premium Swedish-made Olympic bar for competition.',
                  brand: { '@type': 'Brand', name: 'Eleiko' },
                  offers: {
                    '@type': 'Offer',
                    price: '545.00',
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://trugritfitness.pxf.io/Z6PKV1',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5.0',
                    reviewCount: '1234',
                  },
                },
                {
                  '@type': 'Product',
                  position: 3,
                  name: 'Rep Olympic Bar',
                  description: 'Best value American-made Olympic bar.',
                  brand: { '@type': 'Brand', name: 'Rep' },
                  offers: {
                    '@type': 'Offer',
                    price: '279.00',
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    url: 'https://trugritfitness.pxf.io/Z6PKV1',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.7',
                    reviewCount: '892',
                  },
                },
              ],
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
        
        {/* FAQ Schema for FAQ Pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              name: 'Barbell FAQ',
              description: 'Frequently asked questions about barbells answered by experts.',
              url: 'https://barbellnearme.com/faq/barbells',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What weight barbell should I start with?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most beginners should start with a 20kg (45lbs) mens bar. Women and smaller individuals may prefer 15kg (33lbs) womens bars.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long do barbells last?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Quality barbells can last 10-20+ years with proper care. Budget bars may need replacement every 5-10 years.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "What's the difference between bearing and bushing bars?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bearings provide smoother spin for Olympic lifts. Bushings offer durability and are better for powerlifting.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should I get an Olympic or power bar?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Choose Olympic for weightlifting/CrossFit. Choose power bar for squats, bench, and deadlifts at heavy weights.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "What's IPF approval mean?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'IPF approval means the bar meets competition standards for powerlifting including knurl pattern, tensile strength, and dimensions.',
                  },
                },
              ],
            }),
          }}
        />
        
        {/* Article Schema for Guide Pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              name: 'Barbell Buying Guide',
              description: 'Complete guide to choosing the right barbell for your training goals.',
              author: {
                '@type': 'Organization',
                name: 'BarbellNearMe',
              },
              publisher: {
                '@type': 'Organization',
                name: 'BarbellNearMe',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://barbellnearme.com/favicon.svg',
                },
              },
              datePublished: '2026-02-04',
              dateModified: '2026-02-04',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://barbellnearme.com/guide/how-to-choose-barbell',
              },
            }),
          }}
        />
        
        {/* Review Schema for Product Reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Review',
              name: 'Rogue Barbell Review',
              reviewBody: 'Comprehensive review of Rogue barbells including Olympic Bar 2.0, Ohio Power Bar, Echo Bar, and Bella Bar.',
              itemReviewed: {
                '@type': 'Product',
                name: 'Rogue Barbell',
                brand: {
                  '@type': 'Brand',
                  name: 'Rogue Fitness',
                },
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.9',
                bestRating: '5',
                worstRating: '1',
              },
              author: {
                '@type': 'Organization',
                name: 'BarbellNearMe',
              },
              publisher: {
                '@type': 'Organization',
                name: 'BarbellNearMe',
              },
              datePublished: '2026-02-04',
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
