/** Ward Home Care site copy and contact details from the approved WHC website brief. */

export const BRAND = {
  shortName: 'WHC',
  legalName: 'Ward Home Care, Inc.',
  displayName: 'Ward Home Care',
  abbreviation: 'WHC',
  tagline: 'Every Life Deserves a place to Thrive.',
  homeHeadline: {
    upright: 'A place to Belong.',
    italic: 'A Life to Thrive.',
  },
  homeSupport:
    'At Ward Home Care, Inc. (WHC), we believe every individual deserves a home where they feel safe, respected, valued, and supported. We are committed to making every day meaningful through compassionate support and opportunities for personal development in a home-like environment.',
  siteUrlEnv: 'VITE_SITE_URL',
} as const;

export const CONTACT = {
  director: 'Abraham Zewoldie',
  title: 'Executive Director',
  organization: 'Ward Home Care, Inc.',
  addressLines: ['4382 45th Avenue NE', 'Salem, Oregon'],
  addressNote: 'Main office',
  email: 'info@wardhomecare.org',
  phones: {
    cellPrimary: '669-204-4551',
    cellSecondary: '971-283-4859',
    home: '503-584-1259',
    homeFax: '503-584-1315',
  },
  phoneHref: {
    cellPrimary: 'tel:+16692044551',
    cellSecondary: 'tel:+19712834859',
    home: 'tel:+15035841259',
  },
  emailHref: 'mailto:info@wardhomecare.org',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'What We Do' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/careers', label: 'Careers' },
] as const;

export const SUPPORT_SERVICES = [
  'Daily Living Assistance',
  'Health and wellness support',
  'Behavioral and emotional support',
  'Community integration',
  'Independence and life skills development',
  'Individualized support and supervision',
  'Family and Care Team Collaboration',
] as const;

export const CAREERS = {
  headline: 'Join the WHC team today!',
  subhead: 'Now Hiring Direct Support Professionals.',
  intro:
    'We are looking for dedicated individuals to help empower independence for adults with services authorized through Oregon DHS.',
  perks: [
    '401K Retirement and Savings',
    'Paid Time Off & Sick Pay',
    'Medical, Dental, Vision insurance',
  ],
  requirements: [
    'Must be at least 18 years old',
    'Pass a Department of Human Services background check',
    'Be able to read, write and speak fluent English',
    'A clean DMV driving record check (optional depending on position)',
  ],
} as const;
