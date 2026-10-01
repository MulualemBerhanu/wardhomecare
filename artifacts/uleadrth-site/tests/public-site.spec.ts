import { expect, test } from '@playwright/test';

const publicPages = [
  {
    path: '/',
    heading: /A place to land\./,
    title: 'Residential Support & Supportive Care | ULeadRTH',
    description:
      'ULeadRTH is developing a residential support concept centered on dignity, everyday routines, and a path toward greater independence.',
  },
  {
    path: '/about',
    heading: /Our Mission/,
    title: 'About Us | ULeadRTH',
    description:
      "Learn about ULeadRTH's mission, philosophy, and commitment to supportive residential care.",
  },
  {
    path: '/services',
    heading: 'Residential Support',
    title: 'Our Services | ULeadRTH',
    description:
      'Comprehensive residential support focused on practical independence and personal dignity.',
  },
  {
    path: '/approach',
    heading: 'Dignity & Structure',
    title: 'Our Approach | ULeadRTH',
    description:
      "Discover how ULeadRTH's approach to residential care balances autonomy with supportive structure.",
  },
  {
    path: '/life-at-uleadrth',
    heading: 'Life at ULeadRTH',
    title: 'Life at ULeadRTH | ULeadRTH',
    description:
      'Experience the daily rhythms, environment, and community at ULeadRTH.',
  },
  {
    path: '/resources',
    heading: 'Information & Support',
    title: 'Resources & Support | ULeadRTH',
    description:
      'Helpful information and external resources for individuals seeking support.',
  },
  {
    path: '/faq',
    heading: 'Common Questions',
    title: 'Frequently Asked Questions | ULeadRTH',
    description:
      "Find answers to common questions about ULeadRTH's residential support environment.",
  },
  {
    path: '/contact',
    heading: /conversation/,
    title: 'Contact Us | ULeadRTH',
    description:
      'Contact details for ULeadRTH will be published here before launch. Inquiries are not accepted through this preview site.',
  },
  {
    path: '/privacy',
    heading: 'Privacy Policy',
    title: 'Privacy Policy | ULeadRTH',
    description:
      "Review ULeadRTH's preliminary public website privacy notice and information-handling practices.",
  },
  {
    path: '/accessibility',
    heading: 'Accessibility Statement',
    title: 'Accessibility | ULeadRTH',
    description:
      "Read ULeadRTH's commitment to providing an accessible and inclusive public website experience.",
  },
] as const;

for (const pageDetails of publicPages) {
  test(`${pageDetails.path} renders its heading and metadata`, async ({ page }) => {
    await page.goto(pageDetails.path);

    await expect(
      page.getByRole('heading', { level: 1, name: pageDetails.heading }),
    ).toBeVisible();
    await expect(page).toHaveTitle(pageDetails.title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      pageDetails.description,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      pageDetails.title,
    );
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
      'content',
      pageDetails.description,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      /\/images\/og\.jpg$/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new RegExp(`${pageDetails.path === '/' ? '/$' : pageDetails.path + '$'}`),
    );
  });
}

test('desktop navigation reaches every linked public page', async ({ page }) => {
  await page.goto('/');

  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['Approach', '/approach'],
    ['Life Here', '/life-at-uleadrth'],
    ['Contact', '/contact'],
  ] as const;

  for (const [name, path] of links) {
    await page.getByRole('navigation').getByRole('link', { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
  }

  const footerLinks = [
    ['Resources', '/resources'],
    ['FAQ', '/faq'],
    ['Privacy Policy', '/privacy'],
    ['Accessibility', '/accessibility'],
  ] as const;

  for (const [name, path] of footerLinks) {
    await page.getByRole('contentinfo').getByRole('link', { name }).click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
  }
});

test.describe('mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('opens by keyboard, focuses its first link, navigates, and closes with Escape', async ({
    page,
  }) => {
    await page.goto('/');
    const menuButton = page.getByTestId('button-mobile-menu');

    await menuButton.focus();
    await page.keyboard.press('Enter');

    const menu = page.getByRole('dialog', { name: 'Main Navigation' });
    await expect(menu).toBeVisible();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(menuButton).toHaveAccessibleName('Close menu');
    await expect(menu.getByRole('link', { name: 'Home' })).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(menuButton).toBeFocused();

    const links = [
      ['Home', '/'],
      ['About', '/about'],
      ['Services', '/services'],
      ['Approach', '/approach'],
      ['Life Here', '/life-at-uleadrth'],
      ['Contact', '/contact'],
    ] as const;

    for (const [name, path] of links) {
      await menuButton.click();
      await menu.getByRole('link', { name, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
    }
  });
});

test('FAQ controls toggle with keyboard and expose their state', async ({ page }) => {
  await page.goto('/faq');
  const question = page.getByRole('button', {
    name: 'Who is ULeadRTH designed for?',
  });

  await question.focus();
  await page.keyboard.press('Enter');
  await expect(question).toHaveAttribute('aria-expanded', 'true');
  await expect(
    page.getByText(
      'ULeadRTH is being developed for people exploring a structured, supportive residential environment',
    ),
  ).toBeVisible();

  await page.keyboard.press('Space');
  await expect(question).toHaveAttribute('aria-expanded', 'false');
});

test('contact page explains that inquiries are not open yet', async ({ page }) => {
  await page.goto('/contact');

  const main = page.locator('#main-content');
  await expect(main.getByRole('heading', { level: 2, name: /Inquiries/ })).toBeVisible();
  await expect(main.getByText('Nothing you enter elsewhere on this site is transmitted or stored.')).toBeVisible();
  await expect(main.getByText('No inquiry form is active on this preview.')).toBeVisible();
  await expect(main.getByRole('link', { name: 'Our Approach' })).toBeVisible();
  await expect(main.getByRole('link', { name: 'Services' })).toBeVisible();
  await expect(main.locator('input, textarea, form')).toHaveCount(0);

  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await expect(skipLink).toHaveCSS('outline-style', 'solid');
});

test('reduced-motion preference disables meaningful animation durations', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  const animationDuration = await page
    .locator('.reveal')
    .first()
    .evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).animationDuration),
    );
  expect(animationDuration).toBeLessThanOrEqual(0.00001);
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});
