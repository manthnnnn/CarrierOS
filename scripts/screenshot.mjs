import puppeteer from 'puppeteer';

const BASE = 'http://localhost:3000';
const OUT  = './public/screenshots';

const pages = [
  { name: 'landing',    path: '/',           wait: 1500 },
  { name: 'dashboard',  path: '/dashboard',  wait: 1200 },
  { name: 'onboarding', path: '/onboarding', wait: 1000 },
  { name: 'assessment', path: '/assessment', wait: 1000 },
  { name: 'careers',    path: '/careers',    wait: 1000 },
  { name: 'roadmap',    path: '/roadmap',    wait: 1000 },
  { name: 'simulator',  path: '/simulator',  wait: 1000 },
  { name: 'courses',    path: '/courses',    wait: 1000 },
  { name: 'colleges',   path: '/colleges',   wait: 1000 },
  { name: 'copilot',    path: '/copilot',    wait: 1000 },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

for (const pg of pages) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // Set dark theme cookie so next-themes picks it up
  await page.goto(`${BASE}${pg.path}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, pg.wait));

  const file = `${OUT}/${pg.name}.png`;
  await page.screenshot({ path: file, fullPage: false });
  console.log(`✓ ${pg.name} → ${file}`);
  await page.close();
}

await browser.close();
console.log('\n✅ All screenshots saved to public/screenshots/');
