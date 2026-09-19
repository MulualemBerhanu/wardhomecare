import { expect, test } from '@playwright/test';

const publicPages = [
  {
    path: '/',
    heading: /A place to heal\./,
    title: 'Residential Support & Supportive Care | ULeadRTH',
    description:
      'ULeadRTH provides residential support and a dignified environment for individuals seeking a path to greater independence.',
  },
  {
    path: '/about',
    heading: 'Our Mission & Philosophy',
    title: 'About Us | ULeadRTH',
    description:
      "Learn about ULeadRTH's mission, philosophy, and commitment to supportive residential care.",
  },
  {
    path: '/services',
    heading: 'Support, Your Way',
    title: 'Services & Support | ULeadRTH',
    description:
      "Information about ULeadRTH's residential support, life skills guidance, and community connection.",
  },
  {
    path: '/approach',
    heading: 'Everything is Connected',
    title: 'Our Approach | ULeadRTH',
    description:
      "Discover ULeadRTH's interconnected whole-person support model, designed for practical independence.",
  },
  {
    path: '/life-at-uleadrth',
    heading: 'A Home with Room to Grow',
    title: 'Life at ULeadRTH | ULeadRTH',
    description:
      "Experience the day-to-day rhythms of ULeadRTH's residential community. A home focused on connection, calm, and practical living.",
  },
  {
    path: '/resources',
    heading: 'Resources',
    title: 'Resources & Information | ULeadRTH',
    description:
      'General educational information and guidance regarding supportive residential care and person-centered approaches.',
  },
  {
    path: '/faq',
    heading: 'Common Questions',
    title: 'Frequently Asked Questions | ULeadRTH',
    description:
      "Answers to common questions about ULeadRTH's residential support and care philosophy.",
  },
  {
    path: '/contact',
    heading: "Let's Begin",
    title: 'Contact Us | ULeadRTH',
    description:
      'Start a conversation with ULeadRTH about our supportive residential environment.',
  },
  {
    path: '/privacy',
    heading: 'Privacy Policy',
    title: 'Privacy Policy | ULeadRTH',
    description: 'Privacy policy and data handling information for ULeadRTH.',
  },
  {
    path: '/accessibility',
    heading: 'Accessibility Statement',
    title: 'Accessibility Statement | ULeadRTH',
    description:
      "ULeadRTH's commitment to digital accessibility and inclusive design.",
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
  });
}

test('desktop navigation reaches every linked public page', async ({ page }) => {
  await page.goto('/');

  const links = [
    ['About Us', '/about'],
    ['Services', '/services'],
    ['Our Approach', '/approach'],
    ['Life Here', '/life-at-uleadrth'],
    ['Resources', '/resources'],
    ['Get Started', '/contact'],
  ] as const;

  for (const [name, path] of links) {
    await page.getByRole('navigation').getByRole('link', { name }).click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
  }

  const footerLinks = [
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
    await expect(menu.getByRole('link', { name: 'About Us' })).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(menuButton).toBeFocused();

    const links = [
      ['About Us', '/about'],
      ['Services', '/services'],
      ['Our Approach', '/approach'],
      ['Life Here', '/life-at-uleadrth'],
      ['Resources', '/resources'],
      ['Get Started', '/contact'],
    ] as const;

    for (const [name, path] of links) {
      await menuButton.click();
      await menu.getByRole('link', { name }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
    }
  });
});

test('FAQ controls toggle with keyboard and expose their state', async ({ page }) => {
  await page.goto('/faq');
  const question = page.getByRole('button', {
    name: 'What kind of support does ULeadRTH provide?',
  });

  await question.focus();
  await page.keyboard.press('Enter');
  await expect(question).toHaveAttribute('aria-expanded', 'true');
  await expect(
    page.getByText('We provide supportive residential care and life-skills development'),
  ).toBeVisible();

  await page.keyboard.press('Space');
  await expect(question).toHaveAttribute('aria-expanded', 'false');
});

test('contact controls have visible labels and keyboard-visible focus', async ({
  page,
}) => {
  await page.goto('/contact');

  for (const label of [
    'First Name *',
    'Last Name',
    'Email Address *',
    'Phone Number',
    'I am contacting you as... *',
    'What would you like us to know? *',
  ]) {
    await expect(page.getByLabel(label, { exact: true })).toBeVisible();
  }

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
  await expect(page.locator('html')).toHaveCSS(
    'scroll-behavior',
    'auto',
  );
});