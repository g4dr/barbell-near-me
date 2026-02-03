# Affiliate Setup for BarbellNearMe

## Amazon Associates Setup

### Step 1: Sign Up
1. Go to https://affiliate-program.amazon.com/signup
2. Use email: **nicemaths123@gmail.com**
3. Website: `barbellnearme.com`
4. Fill in your content topics (fitness, gym equipment, weightlifting)

### Step 2: Get Your Associate Tag
- Your tag will look like: `barbellnearme-20`
- Replace the placeholder in the code

### Step 3: Add Real Product Links
Replace ASINs in the JavaScript data:

```javascript
const barbells = [
  { 
    name: 'Rogue Ohio Bar', 
    asin: 'B08KFC2D2V',  // REAL Amazon ASIN
    affiliateUrl: 'https://www.amazon.com/dp/B08KFC2D2V?tag=barbellnearme-20'
  },
  // ... add more products
];
```

## Other Affiliate Programs

### Rogue Fitness
- URL: https://www.roguefitness.com/affiliate-program
- Commission: ~5-8%

### REP Fitness
- URL: https://repfitness.com/affiliate
- Commission: ~5%

### Eleiko
- Contact: eleiko.com/contact
- Ask for affiliate program

## Update Affiliate Tag

In `public/index.html`, find and replace:
```javascript
function getAffiliateLink(asin) {
    return `https://www.amazon.com/dp/${asin}?tag=YOUR-TAG-HERE`;
}
```

## Track Your Earnings

- Amazon Associates Dashboard: https://affiliate-program.amazon.com/dashboard
- Check earnings, clicks, and conversions daily

## Disclosure Requirements

Add this to your site footer:
> "BarbellNearMe is a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com."

---
**Note:** Amazon Associates approval typically takes 24-48 hours after signup.
