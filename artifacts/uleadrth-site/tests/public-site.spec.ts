import { expect, test } from '@playwright/test';

const publicPages = [
  {
    path: '/',
    heading: /A place to Belong\./,
    title: '24-Hour Residential Services | Ward Home Care',
    description:
      'Ward Home Care, Inc. (WHC) provides 24-hour residential services for adults with intellectual and developmental disabilities in Salem, Oregon.',
  },
  {
    path: '/about',
    heading: /Who we/,
    title: 'About Us | Ward Home Care',
    description:
      'Learn about Ward Home Care, Inc.—a state-licensed agency providing 24-hour residential services for adults with I/DD in Salem, Oregon.',
  },
  {
    path: '/services',
    heading: /Residential Services/,
    title: 'What We Do | Ward Home Care',
    description:
      'Ward Home Care provides 24-hour residential services and person-centered support for adults with I/DD in Northeast Salem neighborhoods.',
  },
  {
    path: '/admissions',
    heading: /right fit/,
    title: 'Admissions | Ward Home Care',
    description:
      'Admission decisions at Ward Home Care are based on individual needs, preferences, home capacity, and Oregon requirements. Referrals are accepted through Marion County IDD.',
  },
  {
    path: '/connect',
    heading: /conversation/,
    title: 'Connect | Ward Home Care',
    description:
      'Contact Ward Home Care or apply to join our team. Main office in Salem, Oregon. Email info@wardhomecare.org.',
  },
  {
    path: '/resources',
    heading: 'Information & Support',
    title: 'Resources & Support | Ward Home Care',
    description:
      'Helpful information and external resources related to residential support and crisis services.',
  },
  {
    path: '/faq',
    heading: 'Common Questions',
    title: 'Frequently Asked Questions | Ward Home Care',
    description:
      'Find answers to common questions about Ward Home Care’s 24-hour residential services in Salem, Oregon.',
  },
  {
    path: '/privacy',
    heading: 'Privacy Policy',
    title: 'Privacy Policy | Ward Home Care',
    description:
      'Review Ward Home Care’s public website privacy notice and information-handling practices.',
  },
  {
    path: '/accessibility',
    heading: 'Accessibility Statement',
    title: 'Accessibility | Ward Home Care',
    description:
      'Read Ward Home Care’s commitment to providing an accessible and inclusive public website experience.',
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
    ['What We Do', '/services'],
    ['Admissions', '/admissions'],
    ['Connect', '/connect'],
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
      ['What We Do', '/services'],
      ['Admissions', '/admissions'],
      ['Connect', '/connect'],
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
    name: 'Who does Ward Home Care serve?',
  });

  await question.focus();
  await page.keyboard.press('Enter');
  await expect(question).toHaveAttribute('aria-expanded', 'true');
  await expect(
    page.getByText(
      'Ward Home Care, Inc. (WHC) provides 24-hour residential services for adults with intellectual and developmental disabilities',
    ),
  ).toBeVisible();

  await page.keyboard.press('Space');
  await expect(question).toHaveAttribute('aria-expanded', 'false');
});

test('connect page shows contact details and an inquiry form', async ({ page }) => {
  await page.goto('/connect');

  const main = page.locator('#main-content');
  await expect(main.getByRole('heading', { level: 1, name: /conversation/ })).toBeVisible();
  await expect(main.getByText('info@wardhomecare.org')).toBeVisible();
  await expect(main.getByText('4382 45th Avenue NE')).toBeVisible();
  await expect(main.getByRole('heading', { level: 2, name: /Join the WHC team/i })).toBeVisible();
  await expect(main.getByLabel('First Name')).toBeVisible();
  await expect(main.getByLabel('Last Name')).toBeVisible();
  await expect(main.getByLabel('Email')).toBeVisible();
  await expect(main.getByLabel('Subject')).toBeVisible();
  await expect(main.getByLabel('Message')).toBeVisible();
  await expect(main.getByRole('button', { name: 'Submit' })).toBeVisible();

  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await expect(skipLink).toHaveCSS('outline-style', 'solid');
});

test('legacy contact and life routes redirect', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).toHaveURL(/\/connect$/);

  await page.goto('/life-at-uleadrth');
  await expect(page).toHaveURL(/\/services$/);

  await page.goto('/approach');
  await expect(page).toHaveURL(/\/about$/);
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
