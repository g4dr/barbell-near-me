# 🏋️ BarbellNearMe

**Find. Compare. Lift.** The ultimate barbell comparison engine.

## Features

- 🔍 **Location-based Search** - Find barbells near you
- ⚖️ **Compare Specs** - Weight, tensile strength, coating, price
- 🏆 **Top Brands** - Rogue, Eleiko, CAP, REP, and more
- 💰 **Best Deals** - Track prices and find discounts
- 📱 **Mobile Friendly** - Built with Next.js and Tailwind

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Database**: Supabase (ready for setup)
- **Language**: TypeScript

## Project Structure

```
barbell-near-me/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── layout.tsx    # Root layout
│   │   ├── globals.css   # Global styles
│   │   ├── barbells/     # Barbell pages
│   │   ├── brands/       # Brand pages
│   │   ├── best/         # Best lists
│   │   └── deals/        # Deals page
│   ├── components/       # Reusable components
│   ├── lib/              # Utilities & data
│   └── types/            # TypeScript types
├── scripts/              # Scraper & utilities
├── public/               # Static assets
└── package.json
```

## Configuration

### Supabase (Optional - for production)

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Run migrations in Supabase dashboard

### Google Places API (Optional)

For store finder feature:

```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your-key
```

## Free Alternatives Used

| Feature | Free Alternative |
|---------|-----------------|
| Images | Unsplash (1000+/month free) |
| Product Data | Mock data + scrape scripts |
| Hosting | Vercel (unlimited) |
| SSL | Built-in (Vercel) |
| Analytics | Vercel Analytics (free) |

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t barbell-near-me .
docker run -p 3000:3000 barbell-near-me
```

## SEO Features

- Programmatic city pages: `/barbells/near-me?city=new-york`
- Category pages: `/barbells?category=olympic`
- Brand pages: `/brands/rogue`
- Money pages: `/best/barbells-under-300`

## Monetization

- **Affiliate Links**: Amazon Associates, Rogue, Eleiko
- **Sponsored Placements**: Brand listings
- **Email List**: Newsletter for deals

## License

MIT - Build something great!

---

**Built with 💪 by BarbellNearMe**
