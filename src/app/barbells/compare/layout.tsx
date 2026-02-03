import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Barbells - Find Your Perfect Bar | BarbellNearMe',
  description: 'Compare barbells side by side. Filter by category, sort by price or rating. Find the best barbell for your training goals at TruGrit Fitness.',
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
